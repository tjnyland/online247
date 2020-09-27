const Discord = require("discord.js");
module.exports = {
  name: "feature-info",
  description: "For help on mod",
  category: "moderation",
  execute(message, args){
          const finfoembed = new Discord.MessageEmbed()
            .setTitle(':mag_right: Features :mag_right:')
            //.setColor(0xff0000)    4F73F8
            .setColor('4C7AD4')
            .addFields({ name: 'Welcome', value: 'Welcomes user as well as DMing then how to verify !' })
            .addFields({name: 'Logging', value: 'Logs when user verifys is kicked or banned !'})
            //.setFooter('Coded by GalaxyBoy#9353')
             
      
          message.channel.send(finfoembed);
        }
        
}