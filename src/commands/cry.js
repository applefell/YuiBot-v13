const { SlashCommandBuilder, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('Lets you cry!')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that made you cry.')
                .setRequired(true)),
    async execute(interaction, client) {
        const target = user.tag;
        const author = interaction.user.tag;
    },
};