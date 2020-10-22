const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
   
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
  const channel = message.member.voice.channel
    if (!channel)return message.channel.send("You need to be in a voice channel to play music!");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send("There is nothing playing that I could stop for you.");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop the music");
    message.react("✅")
  const queue = message.client.queue.get(message.guild.id);  
}

exports.help = {
  name: "stop",
  description: "stop the bot playing music",
  usage: ";stop",
  example: ";stop"
};

exports.conf = {
  aliases: ["sp"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
