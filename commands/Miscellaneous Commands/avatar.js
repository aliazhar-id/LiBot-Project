const { client, user, MessageEmbed, message } = require("discord.js");


exports.run = async (client, message, args) => {
  
  //skylight commnunity
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
  //bot developer server
/* if(message.author.id !== client.config.owners) { 
  if(message.guild.id === '762841673998008341') {
    if(message.channel.id !== '767512117686435840') if(message.channel.id !== '764170513659723797')  
      return; 
  } } */
  
  if (message.mentions.users.size) {
      let member = message.mentions.users.first();
      if (member) {
        const emb = new MessageEmbed()
          .setImage(member.displayAvatarURL())
          .setColor(message.guild.me.displayColor)
          
        message.channel.send(emb);
      } else {
        message.channel.send("nope!");
      }
    } else {
      const emb = new MessageEmbed()
        .setImage(message.author.displayAvatarURL())
        .setColor(message.guild.me.displayColor)
        
      message.channel.send(emb);
    }
  }


exports.help = {
  
  name: "avatar",
  description: "Show Avatar",
  usage: `${process.env.PREFIX}avatar`,
  example: `avatar <@710364355778052157>`
};

exports.conf = {
  aliases: ["av"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
