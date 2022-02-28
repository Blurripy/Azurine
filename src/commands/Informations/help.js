const {MessageEmbed} = require("discord.js-selfbot");
const {readdirSync, readFileSync} = require("fs");
const prefix = require("../../util/config.json").prefix;

module.exports.help = {
  name: "help",
  aliases: ['h'],
  usage: "[command name]",
  description: "Shows the current commands of Azurine."
}
module.exports.run = async (message, args, command, client) => {
  if (!args[0]) {
   let categories = '';
   readdirSync("./src/commands/").forEach((dir) => {
      const commands = readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".js"));
      const cmds = commands.map((command) => {
        let file = require(`../${dir}/${command}`);
        if(!file.help.name) return "No command name.";
        let name = file.help.name.replace(".js", "");
        return `\`${name}\``;
      });
      let data = new Object();
      data = {
        category: dir,
        name: cmds.length === 0 ? "In progress." : cmds.join(' '),
      }
      categories += `\n${data.category}\n   ${data.name}\n`;
    });

    const listCommands = `\`\`\`\n             My Commands\nUse \`${prefix}help\` followed by a command name to get more information about a specific command. For example: \`${prefix}help ping\`.\n\n${categories}\nRequested by ${message.author.tag}\n\`\`\``
    await message.channel.send(listCommands).then(m => {
      setTimeout(() => {
        m.delete();
      }, 20000)
    });

  } else {

    const command =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.find((c) => c.help.aliases && c.help.aliases.includes(args[0].toLowerCase()));

    if (!command) {

      const invalidCommand = `Invalid command! Use \`${prefix}help\` to see the list of the commands.`

      return await message.channel.send(invalidCommand).then(m => {
        setTimeout(() => {
          m.delete();
        }, 10000)
      });
    }

    const embed = `\`\`\`\nCommand details\nPREFIX\n  ${prefix}\nCOMMAND\n${command.help.name ? `       ${command.help.name}` : "        No name for this command."}\nDESCRITPION\n ${command.help.description ? `        ${command.help.description}` : "        No description for this command."}\nALIASES\n${command.help.aliases ? `        ${command.help.aliases.join("' '")}` : "        No aliases for this command."}\nUSAGE\n${command.help.usage ? `        ${prefix}${command.help.name} ${command.help.usage}` : "        No usage specified for this command."}\n\`\`\``

    return await message.channel.send(embed).then(m => {
      setTimeout(() => {
        m.delete();
      }, 20000)
    });
  }
}
