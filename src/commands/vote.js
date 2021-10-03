const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Lets you vote for the bot!'),
    execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#1dde47')
            .setTimestamp()
            .setTitle('Vote for the bot!')
            .setDescription('Help support the bot and its creator by voting for the bot on any of these sites!')
            .addField('Top.gg', '[Click here](https://top.gg/bot/599102063636381717)', true)
            .addField('Discord Bot List', '[Click here](https://discordbotlist.com/bots/yuibot)', true);

        interaction.reply({ embeds: [embed] });
    },
};