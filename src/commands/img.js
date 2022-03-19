const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('image')
        .setDescription('Sends you a photo!'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('kon')
                    .setLabel('K-On!')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('bocchi')
                    .setLabel('Hitoribocchi')
                    .setStyle('PRIMARY'),

                new MessageButton()
                    .setCustomId('cinderella')
                    .setLabel('Cinderella Girls')
                    .setStyle('PRIMARY'),
            );
        
        await interaction.reply({ components: [row] });
    },
};