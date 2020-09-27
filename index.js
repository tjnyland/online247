const fs = require('fs');
const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');



const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Logged in as MushinBot#2645');
    client.user.setActivity('Mushins corner !', { type: 'WATCHING' });    
});

client.on('message', message => {

    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' | ');
    const dargs = message.content.slice(prefix.length).trim().split('|');
    const command = args.shift().toLowerCase();
    

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, dargs);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
        
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", member =>{
  //member.send("Want your own bot like this ? Just DM **GalaxyBoy#9353** and he will make you your own bot for **FREE** !");
  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
  if (!channel) return; 
//channel.send (`${member} has joined **${member.guild.name}** !`)
channel.send (`Welcome ${member}! Thank you for joining  **${member.guild.name}** !`)
});
client.on("guildMemberAdd", member =>{
  const welcomeDM = new MessageEmbed()
       .setTitle(`Welcome to ${member.guild.name} !`)
       .setColor(0xff0000)
       .setDescription('Welcome ! Please read <#731162360890261525> and <#731885340154921000> and remember to verify in <#717108839094157318> ! ')
       //.setFooter('Coded by GalaxyBoy#9353,Iron#0447 and blackout#8324')
     member.send(welcomeDM)  
}) 
client.on("guildMemberAdd", member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "logs");
    if (!channel) return; 
  channel.send (`👋|${member} (${member.id}) has joined **${member.guild.name}** !`)
  });
  client.on("guildMemberRemove", member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "logs");
    if (!channel) return; 
  channel.send (`👋|**${member.displayName}** (${member.id}) has left **${member.guild.name}** !`)
  });
  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
              const kicklogs = member.guild.channels.cache.find(channel => channel.name === "logs");
              if (!kicklogs) return; 
              kicklogs.send(`🦵| **${message.author.tag}** sucessfully kicked **${user.tag}** !`)

            })
            .catch(err => {
              message.reply('Oh no ! Unable to kick member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this server !");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });
  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('.ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully banned ${user.tag}!`);
              const banlogs = member.guild.channels.cache.find(channel => channel.name === "logs");
              if (!banlogs) return; 
              banlogs.send(`🔨|**${message.author.tag}** sucessfully banned **${user.tag}** !`)
            })
            .catch(err => {
              message.reply('Oh no ! Unable to ban member !');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this server !");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
  });
client.login(process.env.token);