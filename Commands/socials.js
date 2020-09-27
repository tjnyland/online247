const Discord = require("discord.js");
module.exports = {
  name: "socials",
  description: "View the social media's of Mushin",
  category: "fun",
  execute(message, args){
   const embed2 = new Discord.MessageEmbed()
      .setTitle('📱Socials📱')
      //.setColor(0xff0000)
      .setColor('9400D3')
      .addFields({ name: 'YouTube', value: 'https://youtube.com/muhsinataul' })
      .addFields({name: 'Twitter', value: 'https://twitter.com/muhsinataul'})
      .addFields({name: 'Instagram', value: 'https://instagram.com/muhsinataul28'})
      .addFields({name: 'Geometry Dash', value: 'https://gdbrowser.com/profile/Muhsin5723'})
      .addFields({name: 'Website', value: 'https://muhsinataul.ml/'})
      //.setFooter('Coded by GalaxyBoy#9353,Iron#0447 and blackout#8324')
       

    message.channel.send(embed2);
}
}
