const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { cheese } = require('./extra/cheese_switch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cheese')
        .setDescription('Sends you a picture of cheese!'),
    async execute(interaction, client) {
        const ran = Math.floor(Math.random() * (15 - 1) + 1);

        const img = cheese(ran);

        const embed = new MessageEmbed()
                .setColor('#1dde47')
                .setTimestamp()
                .setImage(img);
    
        interaction.reply({ embeds: [embed] });
    },
};