exports.run = (client, message, args) => {
    const moment = require('moment')
    const Disсord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Название', client.user.username, true)
    .addField('Создатель', client.users.get(client.owner), true)
    .addField('Создан', moment(client.user.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField(`Ping`, `${Math.floor(client.ping)}`, true)
    .setThumbnail(client.user.avatarURL)
    .addField('Discord.js', `v${Discord.version}`, true)
    .setFooter('Harika | BotInfo', client.user.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
   }
   exports.help = {
    name: 'botinfo'
   }
