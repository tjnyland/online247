const Discord = require("discord.js");
module.exports = {
  name: "fun-info",
  description: "For help on fun",
  category: "moderation",
  execute(message, args){
          const modinfoembed = new Discord.MessageEmbed()
            .setTitle(':partying_face: Fun :partying_face:')
            //.setColor(0xff0000)    4F73F8
            .setColor('4C7AD4')
            .addFields({ name: 'User info', value: 'Gets basic infomation from user(.user-info)' })
            .addFields({ name: 'Socials', value: 'Gets socials for **Mushin** (.socials)' })
            //.setFooter('Coded by GalaxyBoy#9353')
             
      
          message.channel.send(modinfoembed);
        }
        
}