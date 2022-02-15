const {readdirSync} = require('fs');
const ascii = require('ascii-table');

let table = new ascii("Commands");
table.setHeading('Command', 'Category', ' Load status');

module.exports = (client, dir = "./src/commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
      const getFileName = require(`../../commands/${dirs}/${file}`);
      try {
        client.commands.set(getFileName.help.name, getFileName);
        table.addRow(file, dirs, '✔');
      } catch (e) {
        table.addRow(file, '✘ -> Missing a help.name, or help.name is not a string.');
        continue;
      } if (getFileName.help.aliases && Array.isArray(getFileName.help.aliases)) getFileName.help.aliases.forEach(alias => client.aliases.set(alias, getFileName.help.name));
    }
  });
  console.log(table.toString());
}
