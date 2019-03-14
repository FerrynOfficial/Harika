global.Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs')
client.login(process.env.BOT_TOKEN)
client.owner = '525003205394825257';
client.on('ready', () => {

    client.user.setStatus('dnd')
    client.user.setPresence({
        game:{
          name:`$help | ${client.users.size} users`,
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
const Discord = require('discord.js');
const client = new Discord.Client();
function hook(channel, title, message, color, avatar) { // This function uses quite a few options. The last 2 are optional.

    if (!channel) return message.reply('Укажите канал.');
    if (!title) return message.reply('Укажите заглавие.');
    if (!message) return message.reply('Укажите сообщения.');
    if (!color) color = 'd9a744'; 
    if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png' 

    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    channel.fetchWebhooks() 
        .then(webhook => {

            let foundHook = webhook.find('name', 'Webhook'); 

            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => { 
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else { 
                foundHook.send('', { 
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => { 
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}
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
