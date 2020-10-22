module.exports = async (text, channel) => {
    
  await channel.send({embed: { color: "RED", description: text}})

}