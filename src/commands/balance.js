const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Tells you how much money you have.'),
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
                interaction.reply('You don\'t have any money!');
            }
            if (data) {
                interaction.reply(`You have$${data.balance}!`);
            }
        });
    },
};