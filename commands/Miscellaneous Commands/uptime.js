const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
  //if (!message.member.permissions.has("ADMINISTRATOR")) return;
       var seconds = parseInt((client.uptime / 1000) % 60)
       var minutes = parseInt((client.uptime / (1000 * 60)) % 60)
      var hours = parseInt((client.uptime / (1000 * 60 * 60)) % 60)

        hours = (hours < 10) ? ('0' + hours) : hours
        minutes = (minutes < 10) ? ('0' + minutes) : minutes
        seconds = (seconds < 10) ? ('0' + seconds) : seconds
        return message.channel.send(`**I have been active for**\n**${hours}** hours,\n**${minutes}** minutes\n**${seconds}** seconds!`)
}

exports.help = {
  name: "uptime",
  description: "Display Uptime Bot",
  usage: ";uptime",
  example: ";uptime"
};

exports.conf = {
  aliases: ["up"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
