const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


exports.run = async (client, message, args) => {
       const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing in this server.");

    let queue = new MessageEmbed()
    .setAuthor("Server Songs Queue", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
    .setColor("BLUE")
    .addField("Now Playing", `[${serverQueue.songs[0].title}](https://discord.gg/48YjQ7Y)`, true)
    //.addField("Text Channel", serverQueue.textChannel, true)
    //.addField("Voice Channel", serverQueue.voiceChannel, true)
    .setDescription(serverQueue.songs.map((song) => {
      if(song === serverQueue.songs[0])return
      return `**✅** [${song.title}](${song.url})`
    }).join("\n"))
    //.setFooter("Currently Server Volume is "+serverQueue.volume)
    if(serverQueue.songs.length === 1)queue.setDescription(`No songs to play next add songs by \`\`${client.config.prefix}play <song_name>\`\``)
    message.channel.send(queue)
}

exports.help = {
  name: "queue",
  description: "To show the server songs queue",
  usage: ";queue",
  example: ";queue"
};

exports.conf = {
  aliases: ["q"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}



