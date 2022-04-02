module.exports = (client) => {
  client.user.setActivity(`Azurine`, {type: 'PLAYING'});
  console.log(`${client.user.username} ✅`);
}
