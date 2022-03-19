const { SlashCommandBuilder } = require('@discordjs/builders');
const { findPunch } = require('./extra/punch_switch');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('punch')
        .setDescription('Lets you punch someone.')
        .addUserOption(user =>
            user.setName('user')
                .setDescription('User that you want to punch.')
                .setRequired(true)),
    async execute(interaction, client) {
        const target = interaction.options.getUser('user');
        const author = interaction.user.username;
        const ran = Math.floor(Math.random() * (8 - 1) + 1);

        const img = findPunch(ran);

        const embed = new MessageEmbed()
            .setColor('#dc143c')
            .setTitle(`${author} punched ${target.username}!`)
            .setTimestamp()
            .setImage(`${img}`);
        
        interaction.reply({ embeds: [embed] });
    },
};