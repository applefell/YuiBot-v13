const { MessageEmbed, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cheese')
        .setDescription('Sends you a picture of cheese!'),
    async execute(interaction, client) {
        const ran = Math.floor(Math.random() * (15 - 1) + 1);

        switch(ran) {
            case 1:
                const img = 'https://i.imgur.com/oUVUqJu.jpg';
                break;
            case 2:
                const img = 'https://i.imgur.com/qJuyMDV.jpg';
                break;
            case 3:
                const img = 'https://i.imgur.com/fUUGKdf.jpg';
                break;
            case 4:
                const img = 'https://i.imgur.com/GXA3wxA.jpg';
                break;
            case 5:
                const img = 'https://i.imgur.com/MM0PEV2.jpg';
                break;
            case 6:
                const img = 'https://i.imgur.com/RJ5LM9d.jpg';
                break;
            case 7:
                const img = 'https://i.imgur.com/G6YbdNd.jpg';
                break;
            case 8:
                const img = 'https://i.imgur.com/JphX4mQ.jpg';
                break;
            case 9:
                const img = 'https://i.imgur.com/K7thU6P.jpg';
                break;
            case 10:
                const img = 'https://i.imgur.com/SIWUBUX.jpg';
                break;
            case 11:
                const img = 'https://i.imgur.com/YJry2yd.jpg';
                break;
            case 12:
                const img = 'https://i.imgur.com/RqzNMgK.jpg';
                break;
            case 13:
                const img = 'https://i.imgur.com/p39PAyO.jpg';
                break;
            case 14:
                const img = 'https://i.imgur.com/UjqICqh.jpg';
                break;
            case 15:
                const img = 'https://i.imgur.com/ZAJLmUv.jpg';
                break;
        };

        const embed = new MessageEmbed()
            .setColor('#1dde47')
            .setTimestamp()
            .setImage(`${img}`);
        
            interaction.reply({ embeds: [embed] });
    },
};