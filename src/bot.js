const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, mongoPass, minLevelXP, globalPrefix } = require('../config.json');
const { cinderellaEmbed, bocchiEmbed, konEmbed, randomEmbed } = require('./commands/extra/image/embeds');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.mongoose = require('mongoose');
const { shopInit } = require('./models/shopinit');
client.mongoose.connect(mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.Users = require('./models/Users');
client.Shop = require('./models/Shop');
client.UserItems = require('./models/Useritems');
client.Servers = require('./models/Servers');
shopInit(client);

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (!message.author.bot) {
        const ran = Math.floor(Math.random() * (100 - 1) + 1);
        const potential_xp = Math.floor(Math.random() * (7 - 1) + 1);

        if (ran >= 61) {
            client.Users.findOne({
                user_id: message.author.id,
            }, (err, data) => {
                if (err) console.error(err);
                if (!data) {
                    const newData = new client.Users({
                        user_id: message.author.id,
                        balance: 1,
                        xp: 0,
                        level: 0,
                        xp_cooldown: 900000000,
                        hugs: 0,
                        punches: 0,
                        cries: 0,
                    });
                    newData.save().catch(err => console.error(err));
                } else if (data) {
                    data.balance += 1;
                    data.save().catch(err => console.error(err));
                }
            });
        }

        client.Users.findOne({
            user_id: message.author.id,
        }, (err, data) => {
            if (err) console.error(err);
            if (!data) {
                const newData = new client.Users({
                    user_id: message.author.id,
                    balance: 0,
                    xp: potential_xp,
                    level: 0,
                    xp_cooldown: Date.now(),
                    hugs: 0,
                    punches: 0,
                    cries: 0,
                });
                newData.save().catch(err => console.error(err));
            } else if (data) {
                if (Date.now() - data.xp_cooldown > 120000) {
                    data.xp += potential_xp;
                    data.xp_cooldown = Date.now();
                    data.save().catch(err => console.error(err));
                } else {
                    return;
                }
            }
        });

        client.Users.findOne({
            user_id: message.author.id,
        }, (err, data) => {
            if (err) console.error(err);
            if (!data) return;
            if (data) {
                const xp_modifier = data.level * 25;
                const req_xp = minLevelXP + xp_modifier;
                if (data.xp >= req_xp) {
                    data.xp -= req_xp;
                    data.level += 1;
                    data.save().catch(err => console.error(err));
                } else {
                    return;
                }
            }
        });

    }
})

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }

    if (interaction.isSelectMenu()) {
        await interaction.deferUpdate();
        if (interaction.values[0] === 'kon') {
            konEmbed(interaction);
        } else if (interaction.values[0] === 'bocchi') {
            bocchiEmbed(interaction);
        } else if (interaction.values[0] === 'cinderella') {
            cinderellaEmbed(interaction);
        } else if (interaction.values[0] === 'random') {
            randomEmbed(interaction);
        }
    }
});

client.login(token);