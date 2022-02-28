module.exports.help = {
  name: "ping",
  aliases: ['p'],
  description: "Shows the current latency.",
}
module.exports.run = async (message) => {
  async function deleteMessage(me) {
    setTimeout(() => {
      me.delete();
    }, 3000)
  }

  await message.channel.send("Pinging . . .").then(async m => {
    await m.edit(`Pong! latency is \`${m.createdTimestamp - message.createdTimestamp}ms\``).then(me => deleteMessage(me));
  });

}
