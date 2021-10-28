const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed1 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, vous ne disposez pas des permissions requises. \`ADMINISTRATOR\``)

       if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embeds : [embed1]})
   
const embed2 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, je ne dispose pas des permissions requises. \`ADMINISTRATOR\``)


    if (!message.guild.me.hasPermission("ADMINISTRATOR")) return   message.channel.send({embeds : [embed2]})
  
        
        const member = message.mentions.members.first()


 const embed3 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, vous devez mentionner un utilisateur.`)

        if(!member) {
            return   message.channel.send({embeds : [embed3]})

        }

        args.shift()

        let roleToGive = message.mentions.roles.first()
        
 const embed4 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, vous devez indiquer un rôle à ajouter.`)

        if(!roleToGive) {
            return   message.channel.send({embeds : [embed4]})

        }

        const mentionedPosition = member.roles.highest.position
        const selfPosition = message.member.roles.highest.position

const embed5 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, vous ne pouvez pas ajouté de rôle à ce membre car il possède un rôle égual ou supérieur au votre.`)


        if(selfPosition <= mentionedPosition) {
            return   message.channel.send({embeds : [embed5]})

        }

const embed7 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, je ne peux pas ajouter de rôle ce membre car il est supérieur à moi.`)


if (member.roles.highest.position > message.guild.me.roles.highest.position) {
    return   message.channel.send({embeds : [embed7]})

}

const embed6 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, ce membre possède déjà ce rôle.`)


        if(member.roles.cache.get(roleToGive.id)) {
            return   message.channel.send({embeds : [embed6]})

        }

        member.roles.add(roleToGive)

const embed8 = new MessageEmbed()
                    .setColor('ffff00') 
                    .setDescription(`${message.author}, le rôle ${roleToGive} à bien été ajouté à  ${member}.`)


                    message.channel.send({embeds : [embed8]})

    
}

module.exports.help = {
    name: "addrole",
  };