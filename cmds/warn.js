exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require('moment')
    if(!message.member.permissions.has('MANAGE_MESSAGES')) 
    message.reply('У вас недостаточно прав!')
    return

    if(!message.guild.me.permissions.has('MANAGE_MESSAGES')) return 
    message.reply('У меня недостаточно прав!')
    return

    var warnmember = message.guild.member(message.mentions.users.first())
    if(!warnmember) {
     message.reply('Пользователь не найден!') 
     return
    }
     if(warnmember.permissions.has('MANAGE_MESSAGES'))
     message.reply('Данный пользоваель иммет права равные вам!')
     return
    }
     var reason = args.slice(1).join(' ')
     if(!reason) {  
     message.reply('Укажите причину!')
     return
     }
     var embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(`${member} был предупрежден!\n Причина: ${reason}`)
     .setColor('RANDOM')
     message.channel.send(embed)
     message.member.send('Вы получили предупреждение! Не нарушайте больше!')

exports.help = {
    guildOnly: true,
    enabled: true,
    owner: false,
    name:'warn'

}
