const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
}

exports.help = {
  name: "ping",
  description: "Display Ping Bot",
  usage: "/ping",
  example: "/ping"
};

exports.conf = {
  aliases: ["ping"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
