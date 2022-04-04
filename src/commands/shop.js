const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Tells you what is in the shop'),
    async execute(interaction) {
        await interaction.reply('cake: $5\ntea: $1\ncoffee: $2')
    },
};