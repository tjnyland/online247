const Discord = require("discord.js");
module.exports = {
  name: "mod-info",
  description: "For help on mod",
  category: "moderation",
  execute(message, args){
          const modinfoembed = new Discord.MessageEmbed()
            .setTitle('🛡 Moderation commands 🛡')
            //.setColor(0xff0000)    4F73F8
            .setColor('4C7AD4')
            .addFields({ name: 'Kick', value: 'Kicks user (.kick <@user>)' })
            .addFields({name: 'Ban', value: 'Bans user (.ban <@user>)'})
            .addFields({name: 'Verify', value: 'Verifys user (.verify)'})
            //.setFooter('Coded by GalaxyBoy#9353')
             
      
          message.channel.send(modinfoembed);
        }
        
}