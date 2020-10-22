
const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const getError = require("../../handler/error")

exports.run = async (client, message, args) =>
{
  if(message.author.id !== client.config.owners) 
    {
      if(message.guild.id === '716582498154315786') 
        {
          if(message.channel.id !== '755087414011363489'/*#commands*/) /*if(message.channel.id !== '750594544025993266')*/ return;
        }
    }
  
      const channel = message.member.voice.channel;
       if (!channel)return getError("You need to be in a voice channel to play music!", message.channel);
        const permissions = channel.permissionsFor(message.client.user);
         if (!permissions.has("CONNECT"))return getError("I don't have permission `**CONNECT**` in your voice channel", message.channel);
          if (!permissions.has("SPEAK"))return getError("I don't have permission `**SPEAK**` in your voice channel", message.channel);
           var searchString = args.join(" ");
            if (!searchString)return getError("No song name or url provided!", message.channel);
             var serverQueue = message.client.queue.get(message.guild.id);
              var searched = await yts.search(searchString)
               if(searched.videos.length === 0)return getError("Looks like i was unable to find the song on YouTube", message.channel)
                var songInfo = searched.videos[0]

      const song = 
            {
              id: songInfo.videoId,
               title: Util.escapeMarkdown(songInfo.title),
                views: String(songInfo.views).padStart(10, ' '),
                 url: songInfo.url,
                  ago: songInfo.ago,
                   duration: songInfo.duration.toString(),
                    img: songInfo.image,
                     req: message.author
            };

      if (serverQueue) 
            {
              serverQueue.songs.push(song);
               let thing = new MessageEmbed()
                .setAuthor("Song has been added to queue", "https://media.giphy.com/media/SS8zaNFIbwyjcPdh8U/giphy.gif")
                 .setThumbnail(song.img)
                  .setColor("YELLOW")
                   .addField("Name", `[${song.title}](http://discord.gg/48YjQ7Y)`, false)
                    .addField("Requested by", song.req, true)
                      return message.channel.send(thing);
            }

     const queueConstruct = 
            {
              textChannel: message.channel,
               voiceChannel: channel,
                connection: null,
                 songs: [],
                  volume: 2,
                   playing: true,
            };
                message.client.queue.set(message.guild.id, queueConstruct);
                 queueConstruct.songs.push(song);

    const play = async (song) =>
            {
              const queue = message.client.queue.get(message.guild.id);
               if (!song) 
                 {
                   getError("Queue now is empty, I'll disconnect in 15 minute)", message.channel) 
                   .then(message => {message.delete({ timeout: 900000 })})
                     setTimeout(function() {queue.voiceChannel.leave();}, 900000);
                       message.client.queue.delete(message.guild.id);
                        return;
                 }

              const dispatcher = queue.connection
              .play(ytdl(song.url))
               .on("finish", () => 
                   {
                     queue.songs.shift();
                      play(queue.songs[0]);
                   })
               .on("error", (error) => console.error(error));
                dispatcher.setVolumeLogarithmic(queue.volume / 5);
                 let thing = new MessageEmbed()
                  .setAuthor("Started Playing Music!", "https://www.animatedimages.org/data/media/429/animated-cd-and-dvd-image-0056.gif")
                   .setThumbnail(song.img)
                    .setColor("BLUE")
                     .addField("Name", `[${song.title}](http://discord.gg/48YjQ7Y)`, false)
                      .addField("Requested by", song.req, true)
                       queue.textChannel.send(thing);
            };

    try 
      {
        const connection = await channel.join();
         queueConstruct.connection = connection;
          channel.guild.voice.setSelfDeaf(true)
           play(queueConstruct.songs[0]);
      } 
  
   catch (error) 
     {
         console.error(`I could not join the voice channel: ${error}`);
          message.client.queue.delete(message.guild.id);
           await channel.leave();
            return getError(`I could not join the voice channel: ${error}`, message.channel);
     }
  }
  


exports.help = 
  {
     name: "play",
      description: "to start playing or add song to queue",
       usage: ";play <song/url>",
        example: ";play USSR anthem"
};

exports.conf = 
{
   aliases: ["p"],
    cooldown: 5 // 1 = 1 seconds.
}
