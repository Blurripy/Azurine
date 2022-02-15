const {MessageEmbed} = require('discord.js-selfbot');
const domainPing = require('domain-ping');

module.exports.help = {
  name: "pingdomain",
  aliases: ['pingd'],
  description: "Check if the provided url is up or down.",
  usage: "<NON ABSOLUTE url>",
}
run = async (message, args, command, client) => {

  message.delete();

  async function deleteMessage(me) {
    setTimeout(() => {
      me.delete();
    }, 20000)
  }


  var domain = args[0];

  domainPing(domain)
    .then(async (res) => {

      var logs = JSON.stringify(res);

      var isUp = `${domain} is responding to ping requests.\n\n${domain} is up. Full logs from the scans are available down bellow.`

      await message.channel.send(isUp).then(m => deleteMessage(m));
      await message.channel.send("```json\n" + logs.split(",").join(",\n") + "```").then(m => deleteMessage(m));

    }).catch(async (error) => {

      var logs = JSON.stringify(error);

      var isDown = `${domain} is not responding to ping requests.\n\n${domain} seems to be down. Full logs from the scans are available down bellow.`

      await message.channel.send(isDown).then(m => deleteMessage(m));
      await message.channel.send("```json\n" + logs.split(",").join(",\n") + "```").then(m => deleteMessage(m));

    })

}
