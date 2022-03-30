const { findCinderella } = require('./cinderella');
const { findBocchi } = require('./bocchi');
const { findKon } = require('./kon');
const { MessageEmbed } = require('discord.js');

async function cinderellaEmbed(interaction) {
    const ran = Math.floor(Math.random() * (353 - 1) + 1);

    const pic = findCinderella(ran);

    const embed = new MessageEmbed()
        .setColor('#1dde47')
        .setTimestamp()
        .setImage(`${pic}`);
    
    await interaction.editReply({ content: ' ', components: [], embeds: [embed] });
};

async function bocchiEmbed(interaction) {
    const ran = Math.floor(Math.random() * (60 - 1) + 1);

    const pic = findBocchi(ran);

    const embed = new MessageEmbed()
        .setColor('#1dde47')
        .setTimestamp()
        .setImage(`${pic}`);
    
    await interaction.editReply({ content: ' ', components: [], embeds: [embed] });
};

async function konEmbed(interaction) {
    const ran = Math.floor(Math.random() * (989 - 1) + 1);

    const pic = findKon(ran);

    const embed = new MessageEmbed()
        .setColor('#1dde47')
        .setTimestamp()
        .setImage(`${pic}`);
    
    await interaction.editReply({ content: ' ', components: [], embeds: [embed] });
};

async function randomEmbed(interaction) {
    const ran = Math.floor(Math.random() * (3 - 1) + 1);

    if (ran === 1) {
        cinderellaEmbed(interaction);
    } else if (ran === 2) {
        bocchiEmbed(interaction);
    } else {
        konEmbed(interaction);
    }
};

module.exports = { cinderellaEmbed, bocchiEmbed, konEmbed, randomEmbed };