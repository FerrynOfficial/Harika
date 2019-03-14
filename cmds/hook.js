const Discord = require('discord.js');
const client = new Discord.Client();
function hook(channel, title, message, color, avatar) { 
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
exports.help = {
    name:'hook'
}
