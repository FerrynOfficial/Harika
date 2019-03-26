const Discord = require('discord.js')
exports.run = (client, message, args) => {
    var args1 = message.content.split(' ')
    if(!client.commands.has(args1[1])) {
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('Меню помощи было выслано вам в ЛС.')
        message.channel.send(embed)
        .setColor(client.color)
        .setTitle('Помощь | Help')
        .addField('Основное', client.commands.filter(cmd => cmd.help.group === 'general').map(cmd => `$${cmd.help.name} - ${cmd.help.desc}`).join('\n'))
        .addField('Модерация', client.commands.filter(cmd => cmd.help.group === 'moderation').map(cmd => `$${cmd.help.name} - ${cmd.help.desc}`).join('\n'))
        message.member.send(embed)
    } else {
        var name = client.commands.get(args1[1]).help.name
        var desc = client.commands.get(args1[1]).help.desc
        var usage = client.commands.get(args1[1]).help.usage
        var commandinfo = new Discord.RichEmbed()
        .setColor(client.color)
        .addField('Название', name, true)
        .addField('Описание', desc, true)
        .addField('Использование', usage, true)
        message.channel.send(commandinfo)

    }
}
exports.help = {
name: 'help',
group: 'general',
desc: 'Показывает все комманды бота',
usage: 'help <комманда>',
}
