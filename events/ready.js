module.exports = client => {
  let prefix = client.config.prefix;
  let statuses = [
    `${prefix}help`,
    `${client.users.cache.size} User`,
    "discord.gg/48YjQ7Y",
    `${client.guilds.cache.size} Server`
  ]
  setInterval(function() {
        let status = statuses [Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"}); // url: "https://www.twitch.tv/aliaz05"}); 
    }, 5000); 
  console.log("The bot is ready!");
}