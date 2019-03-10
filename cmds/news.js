exports.run = (client, mesaage, args) => {
    const Discord = requireq('discord.js')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setTitle('Обновление 3.0')
    .setDescription('Были изменен дизайн каналов и категорий, и много другого!')
    .setFooter('Спасибо за Внимание', message.author.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
}
if(!message.member.permissions.has('ADMINISTRATOR'))
   message.reply('У вас недостаточно прав!')
   return

exports.help = {
    name:'news'
}
