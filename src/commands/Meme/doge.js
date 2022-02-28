module.exports.help = {
  name: "doge",
  description: "Doge meme generator",
  args: true,
  usage: "doge (top text) ; (bottom text)"
}
module.exports.run = async (message) => {
  let toptext;
  let bottomtext;
  if (message.content.slice(6).includes(';')) {
    text = message.content.slice(6).replace(/ /g, '+').split(';')
  } else {
    text = [message.content.slice(6).replace(/ /g, '+'), '']
    bottomtext = '';
  }

  message.channel.send(`https://apimeme.com/meme?meme=Advice-Doge&top=${text[0]}&bottom=${text[1]}`)
}