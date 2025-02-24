const { ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, MessageFlags, ChannelType } = require('discord.js');

module.exports = {
    // Fonction pour créer le panel avec le menu déroulant et le bouton
    async createPanel(interaction) {
        const textChannels = interaction.guild.channels.cache
            .filter(channel => channel.type === ChannelType.GuildText)
            .map(channel => ({ label: "# " + channel.name, value: channel.id }));

        if (textChannels.length === 0) {
            return interaction.reply({ content: "Aucun salon textuel trouvé.", flags: MessageFlags.Ephemeral });
        }

        // Création du menu déroulant
        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('createpanel_select')
            .setPlaceholder('Sélectionnez un salon')
            .addOptions(textChannels);

        // Création du bouton de confirmation
        const confirmButton = new ButtonBuilder()
            .setCustomId('createpanel_confirm')
            .setLabel('Confirmer')
            .setStyle(ButtonStyle.Primary);

        // Envoi du panel
        await interaction.reply({
            content: '**Panel de Sélection**\n\nChoisissez un salon textuel :',
            components: [
                new ActionRowBuilder().addComponents(selectMenu),
                new ActionRowBuilder().addComponents(confirmButton)
            ]
        });
    },

    // Handler pour le menu déroulant, gère la logique du menu déroulant
    async handleSelect(interaction) {
        const selectedChannelId = interaction.values[0];
        const selectedChannel = interaction.guild.channels.cache.get(selectedChannelId);

        await interaction.reply({
            content: `Salon sélectionné : ${selectedChannel ? selectedChannel.name : 'Inconnu'}`,
            flags: MessageFlags.Ephemeral
        });
    },

    // Handler pour le bouton
    async handleButton(interaction) {
        await interaction.reply({
            content: 'Configuration sauvegardée !',
            flags: MessageFlags.Ephemeral
        });
    }
};
