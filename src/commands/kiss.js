const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { findKiss } = require('./extra/kiss_switch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Lets you kiss someone!')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that you want to kiss.')
                .setRequired(true)),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user');
        const ran = Math.floor(Math.random() * (7 - 1) + 1);
        const author = interaction.user.username;

        const img = findKiss(ran);

        const embed = new MessageEmbed()
            .setColor('#ffc0cb')
            .setTitle(`${author} kissed ${user.username}!`)
            .setTimestamp()
            .setImage(`${img}`);

        interaction.reply({ embeds: [embed] });
    },
};