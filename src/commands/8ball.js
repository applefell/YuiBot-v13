const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Shakes a magic 8-ball for you!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The question you would like answered.')
                .setRequired(true)),
    execute(interaction) {
        const num = Math.floor(Math.random() * (20 - 1) + 1);
        switch(num) {
        case 1:
            interaction.reply('As I see it, yes.');
            break;
        case 2:
            interaction.reply('Ask again later.');
            break;
        case 3:
            interaction.reply('Better not tell you now.');
            break;
        case 4:
            interaction.reply('Cannot predict now.');
            break;
        case 5:
            interaction.reply('Concentrate and ask again');
            break;
        case 6:
            interaction.reply('Don\'t count on it.');
            break;
        case 7:
            interaction.reply('It is certain.');
            break;
        case 8:
            interaction.reply('It is decidedly so,');
            break;
        case 9:
            interaction.reply('Most likely.');
            break;
        case 10:
            interaction.reply('My reply is no.');
            break;
        case 11:
            interaction.reply('My sources say no.');
            break;
        case 12:
            interaction.reply('Outlook not so good.');
            break;
        case 13:
            interaction.reply('Outlook good.');
            break;
        case 14:
            interaction.reply('Reply hazy, try again.');
            break;
        case 15:
            interaction.reply('Signs point to yes.');
            break;
        case 16:
            interaction.reply('Very doubtful.');
            break;
        case 17:
            interaction.reply('Without a doubt.');
            break;
        case 18:
            interaction.reply('Yes.');
            break;
        case 19:
            interaction.reply('Yes - definitely.');
            break;
        case 20:
            interaction.reply('You may rely on it.');
            break;
        }
    },
};