const fetch = require('cross-fetch');

module.exports.help = {
  name: "fox",
  description: "Sens random fox image.",
}
module.exports.run = async (message, client) => {
  const fox = await fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(json => json.image)
  
    return message.channel.send(fox)
}