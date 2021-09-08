const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, mongoPass } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.mongoose = require('mongoose');
client.mongoose.connect(mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction, client);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(token);