exports.run = (client, message, args) => {
const moment = require('moment')
const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle(` Тех.Поддержка`) 
    .setAttachment('https://discordapp.com/oauth2/authorize?client_id=548501008167206922&scope=bot&permissions=8', 'Пригласить Бота |')
    .setName('Пригласить Бота |')
    .setFile(`https://discordapp.com/oauth2/authorize?client_id=548501008167206922&scope=bot&permissions=8`)
    .setAttachment('https://discord.gg/jakTxAr','Сервер Бота')
    .setName('Сервер Бота')
    .setFile('https://discord.gg/jakTxAr')
    .setColor('RANDOM')
    .setFooter(`Harika | Support`, client.user.avatarURL)
    .setDescription("**Оффициальная Тех Поддержка бота: https://discord.gg/jakTxAr**")
    .setThumbnail("https://i.gifer.com/2iiE.gif") 
  message.channel.send(embed)
}
exports.help = {
    name: 'support'
}
