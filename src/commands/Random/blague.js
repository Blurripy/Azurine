const BlaguesAPI = require('blagues-api');
const { blague_token } = require('../../util/config.json')
const blagues = new BlaguesAPI(blague_token);

module.exports.help = {
  name: "blagues",
  aliases: ['joke'],
  usage: "blagues <category>",
  description: "Send a random french joke.",
}
module.exports.run = async (message, args) => {
  async function deleteMessage(me) {
    setTimeout(() => {
      me.delete();
    }, 20000)
  }

  if (!args[0]) {
    var blague = await blagues.random();
  } else {
    const category = args[0].toLowerCase();
    const categories = ['global', 'dev', 'dark', 'limit', 'beauf', 'blondes'];
    if(!categories.includes(category.toLowerCase())) return message.channel.send(`\`\`\`javascript\nThe category "${args[0]}" doesn\'t exist ! \n\`\`\``).then(m => deleteMessage(m))
    else var blague = await blagues.randomCategorized(category);
  }

  return message.channel.send(`\`\`\`\nBlague:\n${blague.joke}\n\nReponse :    \n${blague.answer}\n\ntype:\n    ${blague.type}\n\`\`\``)
}