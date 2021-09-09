const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('Lets you cry!')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that made you cry.')
                .setRequired(true)),
    async execute(interaction, client) {
        const target = interaction.options.getMember('user');
        const author = interaction.user.tag;
    },
};