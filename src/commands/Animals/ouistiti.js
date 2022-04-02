module.exports.help = {
  name: 'ouistiti',
  description: 'Send a random gif of marmoset',
  aliases: ['marmoset', 'singe']
}

module.exports.run = async (message, client) => {
  try {
    const {tenor_key} = require("../../util/config.json")
    const Tenor = require('tenorjs').client({
      "Key": tenor_key,
      "Filter": "off",
      "Locale": "en_US",
      "MediaFilter": "minimal",
      "DateFormat": "D/MM/YYYY - H:mm:ss A"
    });
  } catch (e) {return message.channel.send('\`\`\`\nThe Tenor app key isn\'t in src/util/config.json !\nPlease reinstall the selfbot with valid informations.\n\`\`\`').then(m => {setTimeout(() => m.delete(), 2000)})};

  try {
    Tenor.Search.Query("marmoset", "1").then(Results => {
      Results.forEach(ouistiti => {
        message.channel.send(ouistiti.url)
      });
    });
  } catch (e) {return message.channel.send("\`\`\`\nThe Tenor app key you provided is invalid !\nPlease reinstall the selfbot with valid informations.\n\`\`\`").then(m => {setTimeout(() => m.delete(), 2000)})};
}
