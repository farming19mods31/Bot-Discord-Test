const Discord = require('discord.js');
const db = require('quick.db');
const bank = new db.table("Banque");
const cash = new db.table("Liquide");
const sale = new db.table("Sale");

module.exports.run = (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vous n'avez pas la permissions requise pour effectuer cette action !");

  let user = message.mentions.members.first() || message.author;

  bank.delete(`banque_${message.guild.id}_${user.id}`);

  cash.delete(`liquide_${message.guild.id}_${user.id}`);

  sale.delete(`Sale_${message.guild.id}_${user.id}`);

  message.delete()

  message.channel.send(`Le compte banquaire de ${user} à été réinitialisé par ${message.author} !`)

};

module.exports.help = {
name: 'reset-money'
}