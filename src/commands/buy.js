const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buy')
        .setDescription('Lets you buy items!'),
    async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing Selected')
                    .addOptions([
                        {
                            label: 'Cake - $5',
                            description: 'A tasty cake!',
                            value: 'cake'
                        },
                        {
                            label: 'Tea - $1',
                            description: 'Some nice tea.',
                            value: 'tea'
                        },
                        {
                            label: 'Coffee - $2',
                            description: 'A freshly brewed coffee.',
                            value: 'coffee'
                        },
                    ]),
            );
        
        await interaction.reply({ content: "Choose the item you want to buy!", components: [row] });
    },
};