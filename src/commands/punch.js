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
                    hugs: 0,
                    punches: 1,
                    cries: 0,
                });
                newData.save().catch(err => console.error(err));
            } else if (data) {
                data.punches += 1;
                data.save().catch(err => console.error(err));
            }
        });

        const img = findPunch(ran);

        const embed = new MessageEmbed()
            .setColor('#dc143c')
            .setTitle(`${author} punched ${target.username}!`)
            .setTimestamp()
            .setImage(`${img}`);
        
        interaction.reply({ embeds: [embed] });
    },
};