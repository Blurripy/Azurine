module.exports.help = {
  name: 'gif',
  description: 'Send a gif',
  aliases: ['tenor'],
  usage: '["Gif Name"]',
  args: true
}

module.exports.run = async (message, args) => {
  const { tenor_key } = require("../../util/config.json");
  const Tenor = require('tenorjs').client({
    "Key": tenor_key,
    "Filter": "off",
    "Locale": "en_US",
    "MediaFilter": "minimal",
    "DateFormat": "D/MM/YYYY - H:mm:ss A"
  });

  Tenor.Search.Query(args, "1").then(Results => {
    Results.forEach(gif => {
      message.channel.send(gif.url)
    });
  })
}