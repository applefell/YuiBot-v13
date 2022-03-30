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
                    punches: 0,
                    cries: 1,
                });
                newData.save().catch(err => console.error(err));
            } else if (data) {
                data.cries += 1;
                data.save().catch(err => console.error(err));
            }
        });

        const img = findCry(ran);

        const embed = new MessageEmbed()
            .setColor('#0000ff')
            .setTimestamp()
            .setTitle(`${author} made ${target.username} cry.`)
            .setImage(`${img}`);

        interaction.reply({ embeds: [embed] });
    },
};