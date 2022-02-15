module.exports.help = {
  name: "wink",
  description: "wink meme generator",
  args: true,
  usage: "wink (top text) ; (bottom text)"
}
module.exports.run = async (message) => {
  message.delete();
  let toptext;
  let bottomtext;
  if (message.content.slice(6).includes(';')) {
    text = message.content.slice(6).replace(/ /g, '+').split(';')
  } else {
    text = [message.content.slice(6).replace(/ /g, '+'), '']
    bottomtext = '';
  }

  message.channel.send(`https://apimeme.com/meme?meme=Wink&top=${text[0]}&bottom=${text[1]}`)
}