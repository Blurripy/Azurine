const fetch = require('cross-fetch');

module.exports.help = {
  name: "dog",
  description: "Sens random dog image.",
}
module.exports.run = async (message, client) => {
  message.delete();

  const dog = await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => json.message)
  
    return message.channel.send(dog)
}