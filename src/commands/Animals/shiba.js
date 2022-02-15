const fetch = require('cross-fetch');

module.exports.help = {
  name: "shiba",
  description: "Sens random shiba image.",
}
module.exports.run = async (message, client) => {
  message.delete();

  const shiba = await fetch('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
    .then(res => res.json())
    .then(json => json)
  
    return message.channel.send(shiba)
}