const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   message.channel.send('discord.gg/48YjQ7Y')
}

exports.help = {
  name: "server",
  description: "To join support server!",
  usage: ";server",
  example: ";server"
};

exports.conf = {
  aliases: ["server"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
