const {Messageinfo} = require('discord.js-selfbot');
const superagent = require('superagent');

module.exports.help = {
  name: "iplookup",
  aliases: ['ipl'],
  usage: "<ipv4 address>",
  description: "Returns informations on a provided ip address.",
  args: true
}
module.exports.run = async (message, args) => {

    const address = await superagent.get(`http://ip-api.com/json/${args[0]}`)
    
    if (address.body.status === 'fail') return message.channel.send("The address you provided is either blacklisted or invalid.").then(m => setTimeout(() => m.delete(), 2000));

    const info = `\`\`\`\n    Ip Lookup\n\nQuery = ${address.body.query}\nStatus = ${address.body.status}\n
      
      Country = ${address.body.country}\nCountry Code = ${address.body.countryCode}\nRegion name = ${address.body.regionName}\nRegion = ${address.body.region}
      
      City = ${address.body.city}\nZIP code = ${address.body.zip}\nLatitude / Longitude = ${address.body.lat} / ${address.body.lon}\n
      
      Timzone = ${address.body.timzone}\n
      
      ISP = ${address.body.isp}\nORG = ${address.body.org}\nAS = ${address.body.as}\nAS name = ${address.body.asname}\n
      
      Reverse DNS = ${address.body.reverse}\nMobile = ${address.body.mobile}\nHosting = ${address.body.hosting}\`\`\``

    await message.channel.send(info).then(m => setTimeout(() => m.delete(), 2000));

}
