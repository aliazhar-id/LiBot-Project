const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first()
    
    
    if(!user) user = message.author
    if(user.id === message.client.user.id) return message.channel.send({embed: {color: 'RANDOM', description: "Sorry I am a BOT don't have a penis"}});
    
    message.channel.send({embed: {
      color: 'RANDOM',
      title: `${user.username} Penis`,
      description: `8${"=".repeat(Math.floor(Math.random() * 18))}D`
    }})

  
}

exports.help = {
  name: "penis",
  description: "Penis Fun Command",
  usage: ";penis or ;penis <mention> ",
  example: ";penis or ;penis <@675175109362843667>"
};

exports.conf = {
  aliases: ["pp"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}




    
