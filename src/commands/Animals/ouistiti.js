module.exports.help = {
  name: 'ouistiti',
  description: 'Send a random gif of marmoset',
  aliases: ['marmoset', 'singe']
}

module.exports.run = async (message, client) => {
  const { tenor_key } = require("../../util/config.json");
  const Tenor = require('tenorjs').client({
    "Key": tenor_key,
    "Filter": "off",
    "Locale": "en_US",
    "MediaFilter": "minimal",
    "DateFormat": "D/MM/YYYY - H:mm:ss A"
  });

  Tenor.Search.Query("marmoset", "1").then(Results => {
    Results.forEach(ouistiti => {
      message.channel.send(ouistiti.url)
    });
  })
}