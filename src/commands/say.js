const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Makes the bot say something!')
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('What you want the bot to say.')
                .setRequired(true)),
    execute(interaction) {
        const quote = interaction.options.getString('quote');
        interaction.channel.send(`${quote}`);
        return;
    },
};