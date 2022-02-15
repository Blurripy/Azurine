const {readdirSync} = require('fs');

module.exports = (client, dir = "./src/events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}${dirs}`).filter(files => files.endsWith('.js'));
    for (const event of events) {
      const evt = require(`../../events/${dirs}/${event}`);
      const eventName = event.split('.')[0];
      client.on(eventName, evt.bind(null, client));
    }
  });
}
