const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { findGif } = require('./extra/gif_switch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Sends you a random gif!'),
    async execute(interaction, client) {
        const ran = Math.floor(Math.random() * (32 - 1) + 1);

        const img = findGif(ran);

        const embed = new MessageEmbed()
            .setColor('#1dde47')
            .setTimestamp()
            .setImage(`${img}`);
        
        interaction.reply({ embeds: [embed] });
    },
};