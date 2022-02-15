const {Collection, Client, Discord} = require('discord.js-selfbot');
const {readdirSync} = require('fs');
const {token, prefix} = require('./util/config.json');
const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./src/commands/");

['loadCommands', 'loadEvents'].forEach(handler => {
  require(`./util/handlers/${handler}`)(client);
});

client.login(token)
