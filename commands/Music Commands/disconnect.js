const Discord = require('discord.js');
const getError = require("../../handler/error");

exports.run = async (client, message, args) => 
{
  if(!message.member.voice.channel) return getError('You have to be connected to a voice channel before you can use this command!', message.channel)
   const queue = message.client.queue.get(message.guild.id); 
    queue.voiceChannel.leave();
     message.client.queue.delete(message.guild.id);
      message.react('✅');
}

exports.help = 
{
  name: "disconnect",
  description: "make bot disconnect from your voice channel",
  usage: ";disconnect",
  example: ";disconnect"
};

exports.conf = 
{
  aliases: ["dc"],
  cooldown: 5   // 1 = 1 seconds.
}
