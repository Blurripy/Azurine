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

try {client.login(token)} catch (e) {console.log('Error: The token is not valid. Please check the installation in the config.json file or reinstall the selfbot.')}