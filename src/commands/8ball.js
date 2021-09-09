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
        const question = interaction.options.getString('input');
        const num = Math.floor(Math.random() * (20 - 1) + 1);
        switch(num) {
        case 1:
            interaction.reply(`*Question: ${question}*\n**As I see it, yes.**`);
            break;
        case 2:
            interaction.reply(`*Question: ${question}*\n**Ask again later.**`);
            break;
        case 3:
            interaction.reply(`*Question: ${question}*\n**Better not tell you now.**`);
            break;
        case 4:
            interaction.reply(`*Question: ${question}*\n**Cannot predict now.**`);
            break;
        case 5:
            interaction.reply(`*Question: ${question}*\n**Concentrate and ask again**`);
            break;
        case 6:
            interaction.reply(`*Question: ${question}*\n**Don\'t count on it.**`);
            break;
        case 7:
            interaction.reply(`*Question: ${question}*\n**It is certain.**`);
            break;
        case 8:
            interaction.reply(`*Question: ${question}*\n**It is decidedly so,**`);
            break;
        case 9:
            interaction.reply(`*Question: ${question}*\n**Most likely.**`);
            break;
        case 10:
            interaction.reply(`*Question: ${question}*\n**My reply is no.**`);
            break;
        case 11:
            interaction.reply(`*Question: ${question}*\n**My sources say no.**`);
            break;
        case 12:
            interaction.reply(`*Question: ${question}*\n**Outlook not so good.**`);
            break;
        case 13:
            interaction.reply(`*Question: ${question}*\n**Outlook good.**`);
            break;
        case 14:
            interaction.reply(`*Question: ${question}*\n**Reply hazy, try again.**`);
            break;
        case 15:
            interaction.reply(`*Question: ${question}*\n**Signs point to yes.**`);
            break;
        case 16:
            interaction.reply(`*Question: ${question}*\n**Very doubtful.**`);
            break;
        case 17:
            interaction.reply(`*Question: ${question}*\n**Without a doubt.**`);
            break;
        case 18:
            interaction.reply(`*Question: ${question}*\n**Yes.**`);
            break;
        case 19:
            interaction.reply(`*Question: ${question}*\n**Yes - definitely.**`);
            break;
        case 20:
            interaction.reply(`*Question: ${question}*\n**You may rely on it.**`);
            break;
        }
    },
};