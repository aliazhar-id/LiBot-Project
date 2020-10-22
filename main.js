const Discord = require("discord.js");
const Client = require("./handler/ClientBuilder.js"); 
const client = new Client({ disableMentions: 'everyone' });
const express = require("express")
const app = express()
  client.queue = new Map()

  app.get("/", (req, res) => res.sendStatus(200))

  app.listen(process.env.PORT)

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

 client.package = require("./package.json");
 client.on("warn", console.warn); 
 client.on("error", console.error); 
 client.login(process.env.DISCORD_TOKEN).catch(console.error);

