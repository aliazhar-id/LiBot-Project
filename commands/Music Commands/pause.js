const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const getError = require("../../handler/error")

exports.run = async (client, message, args) => 
{
  const serverQueue = message.client.queue.get(message.guild.id);
   if(serverQueue && serverQueue.playing)
     {
      serverQueue.playing = false;
       serverQueue.connection.dispatcher.pause();
        let embed = new MessageEmbed()
         .setDescription("⏸ Paused the music for you!")
          .setColor("YELLOW")
           .setAuthor("Music has been paused!", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
             return message.channel.send(embed);
      }
    return getError("There is nothing playing in this server.", message.channel);
},
  


exports.help = 
{
  name: "pause",
  description: "To pause the current music in the server",
  usage: ";pause",
  example: ";pause"
};

exports.conf = 
{
  aliases: ["pse"],
  cooldown: 5 // 1 = 1 seconds.
}