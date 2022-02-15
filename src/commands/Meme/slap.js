const { post } = require('cross-fetch');

module.exports.help = {
  name: "slap",
  description: "Batman slap robin meme generator",
  args: true,
  usage: "slap (text1; text2)"
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

  message.channel.send(`https://apimeme.com/meme?meme=Batman-Slapping-Robin&top=${text[0]}&bottom=${text[1]}`);
}