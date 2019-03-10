exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setTitle('Что нового?')
    .setDescription('Была добавлена команда `news`. Она показывает последние новости на сервере `FlameCommunity`')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name:'bot-news'
}
