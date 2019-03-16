exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('KICK_MEMBERS')) {
        message.reply('**У меня нет прав на это.**')
        return
    }
    if(!message.member.permissions.has('KICK_MEMBERS')) {
        message.reply('**У вас нет прав на это.**')
        return
    }
    var warnmember = message.guild.member(message.mentions.users.first())
    if(!warnmember) {
        message.reply('**Пользователь не найден**')
        return
    }
    if(warnmember.permissions.has('KICK_MEMBERS')) {
        message.reply('**Данный пользователь имеет права равные вам.**')
        return
    }
    var reason = args.slice(1).join(' ')
    if(!reason) {
        message.reply('**Укажите причину.**')
        return
    }
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Предупреждение')
    .setDescription(`${warnmember} был предупрежден!\n Причина: ${reason}`)
    message.channel.send(embed)
}
exports.help = {
    group: 'general',
    guildOnly: true,
    enabled: true,
    owner: false,
    name: 'warn'
}
