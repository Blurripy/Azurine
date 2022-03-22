module.exports = (client) => {
  const {prefix} = require('../../util/config.json')
  client.user.setActivity(`Sinje Simulator`);
  console.log(`${client.user.username} ✅`)
}
