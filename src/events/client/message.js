module.exports = async (client, message) => {
  const {ownerid, prefix, autodelete} = require('../../util/config.json')
  if (message.author.bot || message.author.id != ownerid || !message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length == 0 || cmd.startsWith(`${prefix}`)) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  else {
    command.run(message, args, command, client);
    if (autodelete === true) message.delete();
  }

  if (command.help.args && !args.length) {
    let noArgsReply = "You must provide an argument !";

    if (command.help.usage) noArgsReply += ` You must use the command like that : \n ${prefix}${command.help.name} ${command.help.usage}`;

    return message.channel.send(`\`\`\`\n${noArgsReply}\n\`\`\``);
  }
}
