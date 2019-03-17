exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('У вас недостаточно прав!')
    var embed = new Discord.RichEmbed()
    .setTitle('Обновление 3.0')
    .setDescription('Был изменен дизайн каналов и категорий, и много другого!')
    .setFooter('Спасибо за Внимание', message.author.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
group: 'general',
    usage:'$news',
    desc:'Показывает Новости сервера FlameCommunity',
    name:'news'
}
