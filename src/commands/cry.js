const { SlashCommandBuilder } = require('@discordjs/builders');
const { findCry } = require('./extra/cry_switch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('Lets you cry!')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that made you cry.')
                .setRequired(true)),
    async execute(interaction, client) {
        const target = interaction.options.getUser('user');
        const author = interaction.user.username;
        const ran = Math.floor(Math.random() * (8 - 1) + 1);

        const img = findCry(ran);

        const embed = new MessageEmbed()
            .setColor('#0000ff')
            .setTimestamp()
            .setTitle(`${author} made ${target.username} cry.`)
            .setImage(`${img}`);

        interaction.reply({ embeds: [embed] });
    },
};