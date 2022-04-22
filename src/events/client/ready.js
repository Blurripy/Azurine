const { presence } = require('../../util/assets/presence.json');

module.exports = (client) => {
  client.user.setPresence({
    activity: {
      name: presence.activity.name,
      type: presence.activity.type
    },
    status: presence.status,
  });

  console.log(`${client.user.username} ✅`);
};