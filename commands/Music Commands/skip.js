const Discord = require('discord.js');
const getError = require("../../handler/error");

exports.run = async (client, message, args) => 

{   
  const channel = message.member.voice.channel
    if (!channel)return getError("You need to be in a voice channel to play music!", message.channel);
  const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return getError("There is nothing playing that I could skip for you >:D", message.channel);
        serverQueue.connection.dispatcher.end("Skip . . . >:D");
          message.react("✅")

}

exports.help = 
{
  name: "skip",
  description: "To skip the current music",
  usage: ";skip",
  example: ";skip"
};

exports.conf = 
{
  aliases: ["s"],
  cooldown: 5  // 1 = 1 seconds.
}
