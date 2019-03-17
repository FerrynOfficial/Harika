exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle(`Invite link`)
    .setColor("#00FFFF")
    .setFooter(`Harika | Invite`, client.user.avatarURL)
    .setDescription(`**Ссылка на приглашение:** https://discordapp.com/oauth2/authorize?client_id=548501008167206922&scope=bot&permissions=8`)
    .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
    }
exports.help = {
group: 'general',
  desc: 'Приглашает бота',
  usage: '$invite',
    name: 'invite'
   }   
