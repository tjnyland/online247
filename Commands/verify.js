const Discord = require ('discord.js');
module.exports = {
    name: "verify",
    execute(message, args){
if(message.channel.id === "756519207298007130"){
        const embed3 = new Discord.MessageEmbed()
      .setTitle('Verify')
      //.setColor(0xff0000)
      .setColor('9400D3')
      .setDescription('Click on the ✅ to acess the server!')
      //.setFooter('Coded by GalaxyBoy#9353,Iron#0447 and blackout#8324')
   
      message.channel.send(embed3).then(sentEmbed => { 
      sentEmbed.react("✅")
        
const filter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '✅') {
            message.member.roles.add('757019842539946046');
            message.member.roles.remove('757019593213607936')
            message.reply('You have been successfully verified, welcome to **Muhsins Corner**')
            const verifylogs = message.member.guild.channels.cache.find(channel => channel.name === "logs");
            if (!verifylogs) return; 
            verifylogs.send (`✅|**${message.member}** has been verified !`)
            message.member.send('✅ You have sucessfully verifyed ! Enjoy you stay ! ✅')
        } 
    })
    .catch(collected => {
        message.reply('Oh no ! You did not react in time !');
    });
});
}

else{
    message.channel.send("This command is disabled in this channel.")
}
    }
    }
