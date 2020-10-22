const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
    message.channel.send('Pinging . . .').then(m => {
      const ping = m.createdTimestamp - message.createdTimestamp
      const embed = new Discord.MessageEmbed()
        .setAuthor('Sea Wave')
        .setDescription(`--====================--\n:desktop: Ping -> **${ping}**ms.\n--====================--`)
        .setColor(message.guild.me.displayColor)
        .setFooter(`Request by ${message.author.username}.`)
      m.edit(embed)
    })
}

exports.help = {
  name: "ping",
  description: "Display Ping Bot",
  usage: ";ping",
  example: ";ping"
};

exports.conf = {
  aliases: ["ping"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
