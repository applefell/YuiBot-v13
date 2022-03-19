const { SlashCommandBuilder } = require('@discordjs/builders');
const { findHug } = require('./extra/hug_switch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Lets you hug someone!')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that you want to hug.')
                .setRequired(true)),
    async execute(interaction, client) {
        const target = interaction.options.getUser('user');
        const author = interaction.user.username;
        const ran = Math.floor(Math.random() * (9 - 1) + 1);

        const img = findHug(ran);

        const embed = new MessageEmbed()
            .setColor('#ffc0cb')
            .setTitle(`${author} gave ${target.username} a hug!`)
            .setTimestamp()
            .setImage(`${img}`);
        
        interaction.reply({ embeds: [embed] });
    },
};