exports.run = (client, message, args) => {

    var kickmember = message.guild.member(message.mentions.users.first())
    var reason = args.slice(1).join(' ')

if(!message.guild.me.permissions.has('MANAGE_SERVER')) {
    return message.reply('**У меня нет прав на это.**')
}
if(!message.member.permissions.has('MANAGE_SERVER')) {
    return message.reply('**У вас нет прав на это.**')
}
if(!kickmember) {
    return message.reply('**Пользователь не найден**\n`$warn @User Причина`')
}
if(kickmember.permissions.has('MANAGE_SERVER')) {
    return message.reply('**Данный пользователь имеет права равные вам.**')
}
if(!reason) {
    return message.reply('**Укажите причину.**')
}
message.guild.members.get(kickmember.id).ban(reason)
message.reply('`${kickmember.tag} был предупрежден!`')
}
exports.help = {
    name: 'warn'
}
