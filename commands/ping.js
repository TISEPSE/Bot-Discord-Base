const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Correspond au temps en millisecondes entre le bot et le serveur Discord'),
    async execute(interaction) {
        const client = interaction.client;  // Utilisez `interaction.client` pour accéder à `client`
        await interaction.reply(`Le ping est de : \`${client.ws.ping} ms\``);
    },
};