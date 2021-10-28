const {Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({intents : [
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_BANS,
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
Intents.FLAGS.GUILD_INTEGRATIONS,
Intents.FLAGS.GUILD_WEBHOOKS,
Intents.FLAGS.GUILD_INVITES,
Intents.FLAGS.GUILD_VOICE_STATES,
Intents.FLAGS.GUILD_PRESENCES,
Intents.FLAGS.GUILD_MESSAGES,
Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_MESSAGE_TYPING,
Intents.FLAGS.DIRECT_MESSAGES,
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGE_TYPING
]});
const fs = require('fs');
//const bdd = require('./bdd.json');
//const {prefix} = bdd["prefix"] || "!";
const {prefix} = require('./config.json');
const {token} = require('./token.json');

client.login(token);

client.on('ready', () => {
    console.log("Bot en ligne")
    //client.user.setActivty("!help", {type : "PLAYING"})
})

client.commands = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);

  });
});

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });


  //let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  /*client.on("messageCreate", async message => {
    if (!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: process.env.PREFIX
      };
    }
    
    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    if(prefix == command.slice(0, 1)) {
      let commandFile = client.commands.get(command.slice(prefix.length));
      if(commandFile)
      commandFile.run(client, message, args);
    }
    });*/

/*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if (!prefixes[message.guild.id]){
  prefixes[message.guild.id] = {
    prefixes: process.env.PREFIX
  };
}

let prefix = prefixes[message.guild.id].prefixes;
let messageArray = message.content.split(" ");
let command = messageArray[0];
let args = messageArray.slice(1);

if(prefix == command.slice(0, 1)) {
  let commandFile = client.commands.get(command.slice(prefix.length));
  if(commandFile)
  commandFile.run(client, message, args);
}*/

  //            COMMANDES

  //Set-Prefix

  /*client.on('messageCreate', message => {
    if (message.content.startsWith(` ${prefix}set-prefix`)){
      if(message.member.hasPermission('ADMINISTRATOR')){
        
      }
    }
  })

  function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
      if (err) Discord.Message.channel.send("Une erreur est survenue .")
    });
  }*/

});
