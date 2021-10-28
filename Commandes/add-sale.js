const Discord = require('discord.js');
const db = require('quick.db');
const sale = new db.table("Sale");

module.exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permissions requise pour effectuer cette action !");

  let user = message.mentions.members.first() || message.author;

  if(isNaN(args[1])) return;
  sale.add(`Sale_${message.guild.id}_${user.id}`, args[1]);

  const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} vient de donnner ${args[1]} € d'argent sale à ${user} !`)
    .setColor('ffff00')
    .setFooter(message.author.username)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds : [embed]})

};

module.exports.help = {
name: 'add-sale'
}