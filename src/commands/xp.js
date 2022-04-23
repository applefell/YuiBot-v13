const { SlashCommandBuilder } = require('@discordjs/builders');
const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const { minLevelXP } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xp')
        .setDescription('Shows you the amount of xp you have!'),
    async execute(interaction, client) {
        client.Users.findOne({ user_id: interaction.user.id }, 'xp level', async function (err, data) {
            if (err) console.error(err);

            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');

            const applyText = (canvas, text) => {
                const context = canvas.getContext('2d');

                let fontSize = 40;

                do {
                    context.font = `${fontSize -= 10}px impact`;
                } while (context.measureText(text).width > canvas.width - 300);

                return context.font;
            };

            const background = await Canvas.loadImage('./commands/extra/xp/background.jpg');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            context.font = applyText(canvas, `@${interaction.member.displayName}#${interaction.user.discriminator}`);
            context.fillStyle = '#ffffff';
            context.fillText(`@${interaction.member.displayName}#${interaction.user.discriminator}`, 19, canvas.height / 4.25 - 10);

            const xp_modifier = data.level * 25;
            const req_xp = minLevelXP + xp_modifier;

            context.font = applyText(canvas, `XP: ${data.xp}/${req_xp}`);
            context.fillStyle = '#ffffff';
            context.fillText(`XP:         ${data.xp}/${req_xp}`, 214, canvas.height / 1.95 - 9);

            context.font = applyText(canvas, `Level: ${data.level}`);
            context.fillStyle = '#ffffff';
            context.fillText(`Level:    ${data.level}`, 214, canvas.height / 1.25 + 7);

            const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg' }));
            context.drawImage(avatar, 19, 75, 155, 155);

            const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

            interaction.reply({ files: [attachment] });
        });
    },
};