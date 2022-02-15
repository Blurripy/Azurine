module.exports = (client) => {
  const { prefix } = require('../../util/config.json')
  client.user.setActivity(`${prefix}help`)
  console.log(`${client.user.username} ✅`)
}