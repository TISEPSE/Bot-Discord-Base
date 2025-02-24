require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Collection, REST, Routes, InteractionFlags } = require('discord.js');

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const SERVEUR_CIBLE = process.env.GUILD_ID;
const CHANNEL_LOGS = process.env.CHANNEL_LOGS;

// Créer une instance du client
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

// Charger toutes les commandes
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// Enregistrement des commandes globales
const commands = client.commands.map(command => command.data.toJSON());
const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Enregistrement des commandes globales...');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        console.log('Commandes globales enregistrées avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des commandes :', error);
    }
})();

// Import du handler des panels
const panelHandler = require('./handlers/panelHandler');

// Écouteur d'événements du bot lorsqu'il se connecte
client.once('ready', () => {
    console.log(`Mise en ligne de ${client.user.tag} effectuée avec succès ! ✅`);
    client.user.setPresence({ status: "online" });
});

// Gestion des commandes slash
client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Une erreur est survenue lors de l’exécution de cette commande.', flags: [InteractionFlags.Ephemeral] });
        }
    } 

    // Gestion des interactions avec le menu déroulant
    if (interaction.isStringSelectMenu()) {
        if (interaction.customId === 'createpanel_select') {
            await panelHandler.handleSelect(interaction);  // Appel du handler
        }
    }

    // Gestion des interactions avec le bouton
    if (interaction.isButton()) {
        if (interaction.customId === 'createpanel_confirm') {
            await panelHandler.handleButton(interaction);  // Appel du handler
        }
    }
});

// Connecte le bot avec le token
client.login(TOKEN);
