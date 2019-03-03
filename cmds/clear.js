exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var args1 = message.content.split(' ')
    var purge = args1[1]
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('У вас недостаточно прав!')
    if(!purge || isNaN(purge) ||
    parseInt(purge) < 1 ||
    parseInt(purge) >= 100) {
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Укажите пожалуйста число!')
        .setColor(client.color)
        .setFooter('Harika | Clear', client.user.avatarURL)
        return
        message.channel.send(embed)
    }
    message.channel.bulkDelete(purge).then(m => {
        var embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`Было удалено **${purge}** сообщений!`)
        .setColor(client.color)
        .setFooter('Harika | Clear', client.user.avatarURL)
        message.channel.send(embed1).then(m => m.delete(10000))
    })
}
exports.help = {
    name: 'clear'
}
