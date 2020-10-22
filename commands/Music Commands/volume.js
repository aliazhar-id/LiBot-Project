const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
     const channel = message.member.voice.channel;
    if (!channel)return message.channel.send("I'm sorry but you need to be in a voice channel to play music!");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing in this server.");
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    let embed = new MessageEmbed()
    .setDescription(`I set the volume to: **${args[0]/5}/5**(it will be divied by 5)`)
    .setAuthor("Server Volume Manager", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
    .setColor("BLUE")
    return message.channel.send(embed);
}

exports.help = {
  name: "volume",
  description: "To change the server song queue volume",
  usage: ";volume <amount>",
  example: ";volume 5"
};

exports.conf = {
  aliases: ["v", "vol"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}