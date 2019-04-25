exports.run = (client, message, args) => {
  const Discord = require('discord.js')
  const fs = require('fs')
  var profile = require('./profile.json')
  var warnmember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) 

    if(!message.guild.me.permissions.has('KICK_MEMBERS')) {
      var err = new Discord.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('У меня недостаточно прав для выполнения данного действия')
      .setColor('RANDOM')
      message.channel.send(err)
        return
    }
    if(!message.member.permissions.has('KICK_MEMBERS')) {
      var err1 = new Discord.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('У вас недостаточно прав для выполнения данного действия')
      .setColor('RANDOM')
      message.channel.send(err1)
        return
    }
    if(!warnmember) {
      var err2 = new Discord.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('Вы не указали пользователя')
      .setColor('RANDOM')
      message.channel.send(err2)
        return
    }
    if(warnmember.permissions.has('KICK_MEMBERS')) {
      var err3 = new Discord.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('Данный пользователь имеет права равные вам')
      .setColor('RANDOM')
      message.channel.send(err3)
        return
    }
    var reason = args.slice(1).join(' ')
    if(!reason) {
      var err4 = new Discord.RichEmbed()
      .setTitle('Ошибка')
      .setDescription('Вы не указали причину')
      .setColor('RANDOM')
      message.channel.send(err4)
        return
        
       profile[warnmember.id].warns++
       fs.writeFile('./profile.json')JSON.stringify(profile), (err)=>{
         if(err) console.log(err)
       }
    }
    var embed = new Discord.RichEmbed()
    .setTitle('Предупреждение')
    .addField('Администратор', meessage.author.username)
    .addField('Нарушитель', `${warnmember.user.username}`)
    .addField('Количество Предупреждений', `${profile[warnmember.id].warns}/3`)
    .addField('Причина', `${reason}`)
    .setColor('RANDOM')
    message.channel.send(embed)

    profile[warnmember.id].warns++
    if(profile[warnmember.id].warns >=3) {
      meessage.guild.member(warnmember).kick('3/3 Предупреждений')
    }
}
exports.help = {
    group: 'moderation',
    desc: 'Выдает Предупреждение',
    usage: '$warn [Пользователь] [Причина]',
    name: 'warn'
}
