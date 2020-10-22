const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
  const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let embed = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setAuthor("Music has been Resumed!", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
      return message.channel.send(embed);
    }
    
    let embed2 = new MessageEmbed()
    .setColor("RED")
    .setDescription("There is nothing playing in this server.")
    return message.channel.send(embed2);
}

exports.help = {
  name: "resume",
  description: "To resume the paused music",
  usage: ";resume",
  example: ";resume"
};

exports.conf = {
  aliases: ["re"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}

