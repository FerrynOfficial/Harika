exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const moment = require('moment')
    var embed = new Discord.RichEmbed()
    .setTitle('Что нового?')
    .setDescription('Была добавлена команда `help`.')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
group: 'general',
desc: 'Показывает новости бота',
usage: 'bot-news',
name:'bot-news'
}
