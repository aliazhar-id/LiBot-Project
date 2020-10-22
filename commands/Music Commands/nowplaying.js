const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const getError = require("../../handler/error")

exports.run = async (client, message, args) => 
{
  if(message.author.id !== client.config.owners) 
    {
      if(message.guild.id === '716582498154315786') 
        {
          if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
        } 
    }
  
  const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return getError("There is nothing playing in this server.", message.channel)
      let song = serverQueue.songs[0]
        let thing = new MessageEmbed()
          .setAuthor("Now Playing", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
            .setThumbnail(song.img)
              .setColor("BLUE")
                .addField("Name", song.title, true)
                  .addField("Requested by", song.req.tag, true)
                    return message.channel.send(thing)
}

exports.help = 
{
  name: "nowplaying",
  description: "Show the music which is currently playing in this server",
  usage: ";nowplaying",
  example: ";nowplaying"
};

exports.conf = 
{
  aliases: ["np"],
  cooldown: 5 // 1 = 1 seconds.
}
