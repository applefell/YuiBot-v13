const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Shows what is in your inventory'),
    async execute(interaction, client) {
        client.UserItems.findOne({
            user_id: interaction.user.id,
        }, (err, data) => {
            if (err) console.error(err);
            if (!data) {
                interaction.reply('You do not have any items!');
            } else if (data) {
                interaction.reply(`cake: ${data.cake}\ntea: ${data.tea}\ncoffee: ${data.coffee}`)
            }
        });
    },
};