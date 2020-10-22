const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   if (!message.member.permissions.has("ADMINISTRATOR")) return;
      
      const sayMessage = args.join(' ')
      if (!sayMessage) return message.channel.send("type ,say <message>");
      message.delete().catch(O_o => {})
      message.channel.send(sayMessage)
}

exports.help = {
  name: "say",
  description: "tell the bot to repeat your message",
  usage: ";say <message>",
  example: ";say hello world :)"
};

exports.conf = {
  aliases: ["sudo"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
