const Discord = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");

module.exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permissions requise pour effectuer cette action !");

  let user = message.mentions.members.first() || message.author;

  if(isNaN(args[1])) return;
  bank.add(`banque_${message.guild.id}_${user.id}`, args[1]);

  const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient de donnner ${args[1]} € à ${user} !`)
    .setColor('ffff00')
    .setFooter(message.author.username)
    .setTimestamp()

  message.delete()

  message.channel.send(embed)

};

module.exports.help = {
name: 'add-money'
}