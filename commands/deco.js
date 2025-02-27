const { SlashCommandBuilder, MessageFlags } = require("discord.js");

const LOG_CHANNEL_ID = process.env.CHANNEL_LOGS;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("deco")
    .setDescription("Déconnecte le bot (admin seulement)"),

  async execute(interaction) {
    if (interaction.user.id === "560460445735976960") {

      // Réponse de confirmation à l'utilisateur
      const replyMessage = await interaction.reply({
        content: `Ok, je me déconnecte. Salut "${interaction.user.username}" ! 👋`,
        flags: MessageFlags.Ephemeral
      });

      //Envoi du message dans le channel "logs" (avant la déconnexion)
      const logChannel = interaction.guild.channels.cache.get(LOG_CHANNEL_ID);
      if (logChannel) {
        logChannel.send(`📶 L'utilisateur: **__${interaction.user.tag}__** à déconnecté **__${interaction.client.user.tag}__**. Commande exécuter dans:  <#${interaction.channel.id}>`);
      } else {
        console.log("Channel de logs introuvable, mais déconnexion effectuée quand même.");
      }

      // Supprime le message après 3 secondes
      setTimeout(() => {
        replyMessage.delete().catch(console.error);
      }, 3000);

      // Déconnexion du bot après un délai de 3 secondes
      setTimeout(async () => {
        await interaction.client.destroy(); // Déconnecte le bot proprement
        console.log(`${interaction.client.user.tag} est déconnecté`);

        // Termine complètement le script après la déconnexion
        process.exit(0);
      }, 3500);
    } else {
      await interaction.reply({
        content: "Tu n'as pas la permission de me déconnecter !",
        flags: MessageFlags.Ephemeral
      });
    }
  },
};