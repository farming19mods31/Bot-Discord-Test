const Discord = require('discord.js');
const {client} = require('../index.js');

module.exports = async(client, message) => {

    client.on("guildMemberAdd", member => {
      member.guild.channels.cache.get(`901825306648784916`).send(`Bienvenue  ${member.user} dans le serveur ${guild.name} !`)
  });
};