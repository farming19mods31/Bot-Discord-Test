const db = require('quick.db');
const Discord = require('discord.js');
const bank = new db.table("Banque");
const cash = new db.table("Liquide");
const sale = new db.table("Sale");

module.exports.run = (client, message, args) => {

  let user = message.author ;

  let banque = bank.fetch(`banque_${message.guild.id}_${user.id}`)
  if (banque === null) banque = 0

  let liquide = cash.fetch(`liquide_${message.guild.id}_${user.id}`)
  if (liquide === null) liquide = 0

  let Sale = sale.fetch(`Sale_${message.guild.id}_${user.id}`)
  if (Sale === null) Sale = 0

  const embed = new Discord.MessageEmbed()
    .setTitle("MON COMPTE")
    .setDescription(`Argent en banque : ${banque} € \nArgent liquide : ${liquide} € \nArgent Sale : ||${Sale}||`)
    .setColor('ffff00')

  message.delete()

  message.channel.send({embeds : [embed]})
};

module.exports.help = {
name: 'money'
}