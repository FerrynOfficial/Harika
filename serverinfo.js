exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Название', message.guild.name, true)
    .addField('Создатель', message.guild.owner, true)
    .addField('Создан', moment(message.guild.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('Роли', message.guild.roles.size, true)
    .addField('Участников', message.guild.members.size, true)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Ваше сообщение', client.user.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
   }
   exports.help = {
    name: 'serverinfo'
   }
