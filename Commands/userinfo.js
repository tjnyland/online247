const Discord = require("discord.js");
module.exports = {
  name: "user-info",
  description: "User infomation !",
  category: "fun",
  execute(message, args){
    if (message.content === '.user-info') {
        const embed1 = new Discord.MessageEmbed()
          .setTitle(`📚 Info for ${message.author.tag}📚`)
          //.setColor(0xff0000)    4F73F8
          .setColor('4C7AD4')
          .addFields({ name: 'Name:', value: `${message.author.username}\n` })
          .addFields({ name: 'Client ID:', value: `${message.author.id}` })
          //.addFields({ name: 'Avatar Link:', value: (message.author.displayAvatarURL)})
          //.addFields({ name: 'Placeholder', value: `${message.author}`})
          .setThumbnail(message.author.displayAvatarURL());
          
          //.setFooter('Coded by GalaxyBoy#9353 ,Iron#0447 and blackout#8324')
           
    
        message.channel.send(embed1);
}
}}
