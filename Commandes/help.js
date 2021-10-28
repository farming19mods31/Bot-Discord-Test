const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle("MES COMMANDES")
    .setDescription("Prochainement des commandes arriveront !")
    .setColor('ffff00')
    .setFooter(message.author.tag)
    .setTimestamp()

  message.delete()

  message.channel.send({embeds : [embed]})

};

module.exports.help = {
name: 'help'
}