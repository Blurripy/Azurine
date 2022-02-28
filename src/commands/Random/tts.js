const config = require("../../util/config.json");

module.exports.help = {
  name: "tts",
  aliases: [],
  description: "Sends a tts message into the current channel.",
  usage: "<message>",
  args: true
}
module.exports.run = async (message, args, command, client) => {

  var text = args.join(' ');

  await message.channel.send(text, {tts: true}).then(m => {setTimeout(() => {m.delete()}, 20000)});

}
