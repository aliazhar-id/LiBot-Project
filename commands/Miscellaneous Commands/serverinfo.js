const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  
  if(message.author.id !== client.config.owners) {
  
  if(message.guild.id === '716582498154315786') {
    if(message.channel.id !== '755087414011363489') /*if(message.channel.id !== '750594544025993266')*/ return;
  } }
  
  //if (!message.member.permissions.has("ADMINISTRATOR")) return;
    
    let channels = message.guild.channels
    let text = channels.cache.filter(r => r.type === "text").size,
        vc = channels.cache.filter(r => r.type === "voice").size,
        category = channels.cache.filter(r => r.type === "category").size;
        var server = message.guild.id;
    var serverIcon = message.guild.iconURL()
    const InfoEmbed = {
    color: message.guild.me.displayColor,
    author: {
              name: `${message.guild.name}`,
              icon_url: `${serverIcon}`
            },
    fields: [
		{
			name: '**Owner**',
			value: `${message.guild.owner.user.tag}`,
      inline: true,
		},
		{
			name: '**Region**',
			value: `${message.guild.region}`,
			inline: true,
		},
		{
			name: 'Channel Categories',
			value: ` ${category}`,
			inline: true,
		},
		{
			name: '**Text Channel**',
			value: `${text}`,
			inline: true,
		},
    {
		  name: '**Voice Channel**',
			value: `${vc}`,
			inline: true,
		},
    {
			name: '**Members**',
			value: `${message.guild.memberCount}`,
			inline: true,
		}, 
    {
			name: '**Roles**',
			value: `${message.guild.roles.cache.size}`,
			inline: true,
		},   
	],
      
    footer: {
		  text: `ID: ${message.guild.id} | Server Created • ${moment(message.guild.createdAt).format("MM/DD/YYYY")}`,
	},
      
    }
    message.channel.send({ embed: InfoEmbed });
}

exports.help = {
  name: "serverinfo",
  description: "Show About Information Server Where you are.",
  usage: ";serverinfo",
  example: ";serverinfo"
};

exports.conf = {
  aliases: ["si"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
