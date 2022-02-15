const fetch = require('cross-fetch');

module.exports.help = {
  name: "cat",
  description: "Sens random cat image.",
}
module.exports.run = async (message, client) => {
  message.delete();

  const cat = await fetch('http://aws.random.cat/meow')
    .then(res => res.json())
    .then(json => json.file)
  
    return message.channel.send(cat)
}