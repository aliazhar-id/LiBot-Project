const Discord = require("discord.js"),
      fs = require("fs");


module.exports = client => {
   client.commands = new Discord.Collection();
   client.aliases = new Discord.Collection();
   client.helps = new Discord.Collection();
  
  fs.readdir("./commands/", (err, categories) => {
     if (err) console.log(err) //ini akan mengirimkan pesan kesalahn bila terdapat kesalahan
     console.log(`Found total ${categories.length} categories.`);
    
    categories.forEach(category => {
      let moduleConf = require(`../commands/${category}/module.json`);
      moduleConf.path = `./commands/${category}`;
      moduleConf.cmds = [];
      if (!moduleConf) return; // jika didalam folder commands category tidak memiliki module.json maka return
      client.helps.set(category, moduleConf);
      
      fs.readdir(`./commands/${category}`, (err, files) => {
        
        console.log(`Ditemukan ${files.length - 1} command(s) dari ${category}.`);
        if (err) console.log(err);
        let commands = new Array();
        
        files.forEach(file => {
          if (!file.endsWith(".js")) return; // jika file didalam category berekstensi selain .js, akan di abaikan
          let prop = require(`../commands/${category}/${file}`);
          let cmdName = file.split(".")[0];
          
          client.commands.set(prop.help.name, prop)
          
          prop.conf.aliases.forEach(alias => {
            client.aliases.set(alias, prop.help.name);
          })
          
          client.helps.get(category).cmds.push(prop.help.name);
          // This will push the data into Collection, which is includes name of the file, aliases, and many.
        })
      })
    })
  })
}
