const Discord = require("discord.js");
module.exports = {
  name: "help",
  description: "For help",
  category: "moderation",
  execute(message, args){
          const embed1 = new Discord.MessageEmbed()
            .setTitle('Help')
            //.setColor(0xff0000)    4F73F8
            .setColor('4C7AD4')
            .addFields({ name: '🛡 Moderation 🛡', value: 'Use command **mod-info**' })
            .addFields({name: '🥳 Fun 🥳', value: 'Use command **fun-info**'})
            .addFields({name: '🔎 Features 🔎', value: 'Use command **feature-info**'})
            //.setFooter('Coded by GalaxyBoy#9353')
             
      
          message.channel.send(embed1);
        }
        
}
