exports.run = (client, message, args) => {
const moment = require('moment')
const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle(`Support`) 
    .setColor("#FF0000")
    .setFooter(`Harika | Support`, client.user.avatarURL)
    .setDescription("**Оффициальная Тех Поддержка бота: https://discord.gg/jakTxAr**")
    .setThumbnail("https://i.gifer.com/2iiE.gif") 
  message.channel.send(embed)
}
exports.help = {
    name: 'support'
}
