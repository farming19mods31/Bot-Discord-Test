const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setTitle("Bonjour voici le tutoriel de toamix")
        message.channel.send({embeds : [embed]})
    

}

module.exports.help = {
    name: 'test',
  };