const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const gamble = require('./extra/gamble');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gamble')
        .setDescription('Lets you gamble your money!')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('How much you want to gamble.')
                .setRequired(true)),
    async execute(interaction, client) {
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
                    cries: 0,
                });
                newData.save().catch(err => console.error(err));
                interaction.reply({ content: "You can\'t gamble more money than you have!" });
            } else if (data) {
                const gambleAmount = interaction.options.getInteger('amount');

                if (gambleAmount === 0) {
                    interaction.reply({ content: "You have to gamble at least $1" });
                } else if (gambleAmount >= 1) {
                    if (gambleAmount > data.balance) {
                        interaction.reply({ content: "You can\'t gamble more money than you have!" })
                    } else if (gambleAmount < data.balance) {
                        const ran1 = Math.floor(Math.random() * (15 - 1) + 1);
                        const ran2 = Math.floor(Math.random() * (15 - 1) + 1);
                        const ran3 = Math.floor(Math.random() * (15 - 1) + 1);

                        data.balance -= gambleAmount;

                        const fruit1 = gamble.fruit(ran1);
                        const fruit2 = gamble.fruit(ran2);
                        const fruit3 = gamble.fruit(ran3);

                        const value1 = gamble.value(ran1);
                        const value2 = gamble.value(ran2);
                        const value3 = gamble.value(ran3);

                        const mult = gamble.payout(value1, value2, value3);

                        const winnings = gambleAmount * mult;

                        data.balance += winnings;

                        const color = gamble.color(mult);

                        const titleRan = Math.floor(Math.random() * (3 - 1) + 1);
                        const title = gamble.title(titleRan);

                        const embed = new MessageEmbed()
                            .setColor(`${color}`)
                            .setTimestamp()
                            .setTitle(`${title}`)
                            .setDescription(`${fruit1}${fruit2}${fruit3}`);
                        
                        interaction.reply({ embeds: [embed] });

                        if (mult === 0) {
                            interaction.channel.send('You didn\'t win any money, maybe next time!');
                        } else {
                            interaction.channel.send(`You won ${winnings}!`);
                        }

                        data.save().catch(err => console.error(err));
                    }
                }
            }
        });
    },
};