module.exports = (client) => {
  const { prefix } = require('../../util/config.json')
  client.user.setActivity(`Azurine`)
  console.log(`${client.user.username} ✅`)
}