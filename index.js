global.Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
client.login(process.env.BOT_TOKEN)
client.owner = '525003205394825257';
client.on('ready', () => {

    client.user.setStatus('dnd')
    client.user.setPresence({
        game:{
          name:'$help | Русский Бот',
          type:"PLAYING"
        }
      }) 
})
client.on('guildMemberAdd', member => {
    var channel = member.guild.channels.get('538682429150461972')
   channel.send(`**${member}, Добро пожаловать на сервер ${member.guild.name}**`)
})
    client.on('guildMemberRemove', member => {
        var channel = member.guild.channel1s.get('548924952766578698')
        channel.send(`**Прощай, ${member.user.tag}, желаем тебе удачи!**`)
})
client.on('messageDelete', message => {
    var channel = message.channel.send
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**Удалено сообщения**\n**Содержание:** ${message.content}\n**ID:** ${message.id}`)
    .setColor('#FF0000')
    .setFooter('Harika | Logs', client.user.avatarURL)
   message.channel.send(embed)
})
client.prefix = '$'
client.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('No commands!')
        return
    }
    console.log(`[COMMANDS] Loaded ${files.length} commannds!`)
    jsfiles.forEach(f => {
        let props = require(`./cmds/${f}`)
        client.commands.set(props.help.name, props);
    })
})
client.on('message', message => {
    let msg = message.content.toLowerCase() || message.content.toUpperCase()
    if(!msg.startsWith(client.prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);

    let command = args.shift().toLowerCase();
    let cmd;
    if(client.commands.has(command)) {
        cmd = client.commands.get(command)
    }
    if(!cmd) return;
    cmd.run(client, message, args)
})
