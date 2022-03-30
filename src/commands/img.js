const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('image')
        .setDescription('Sends you a photo!'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing Selected')
                    .addOptions([
                        {
                            label: 'K-on!',
                            description: 'A image from the anime K-on!',
                            value: 'kon',
                        },
                        {
                            label: 'Hitoribocchi',
                            description: 'A image from the anime Hitoribocchi no Marumaru Seikatsu',
                            value: 'bocchi',
                        },
                        {
                            label: 'Cinderella Girls',
                            description: 'A image from the anime The Idolm@ster: Cinderella Girls',
                            value: 'cinderella',
                        },
                        {
                            label: 'Random',
                            description: 'A image from a random anime',
                            value: 'random',
                        },
                    ]),
            );
        
        await interaction.reply({ content: "Choose a franchise or a random image!", components: [row] });
    },
};