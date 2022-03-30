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

        client.Users.findOne({
            user_id: interaction.user.id,
        }, (err, data) => {
            if (err) console.error(err);
            if (!data) {
                const newData = new client.Users({
                    user_id: interaction.user.id,
                    balance: 0,
                    xp: 0,
                    level: 0,
                    xp_cooldown: 900000000,
                    hugs: 1,
                    punches: 0,
                    cries: 0,
                });
                newData.save().catch(err => console.error(err));
            } else if (data) {
                data.hugs += 1;
                data.save().catch(err => console.error(err));
            }
        });

        const img = findHug(ran);

        const embed = new MessageEmbed()
            .setColor('#ffc0cb')
            .setTitle(`${author} gave ${target.username} a hug!`)
            .setTimestamp()
            .setImage(`${img}`);
        
        interaction.reply({ embeds: [embed] });
    },
};