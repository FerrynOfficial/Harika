const Discord = require('discord.js')
const moment = require('moment')
var embed = new Discord.RichEmbed()
.setDescription('Шелли — обычный бравлер, которого получает каждый на старте игры. Она имеет средний запас здоровья и средний урон. Её оружие — дробовик, следовательно чем ближе находится цель, тем больший урон будет по ней нанесён. Это делает Шелли идеальным персонажем для ближнего боя. Но всё же благодаря неплохой дальности стрельбы Шелли может наносить урон по целям, значительно удалённым от неё, что даёт ей определённое преимущество перед другими "ближниками". 
.setThumbnail('https://brawlstarsworld.fandom.com/ru/wiki/Шелли?file=Shelly_Skin-Default-0.png')
.setColor('#00FFFF')
message.channel.send(embed)
var brawler = args.slice(1).join(' ')
if (!brawler) {
  message.reply('Укажите Бравлера')
  return
}
exports.help = {
 group: 'BrawlStars',
 desc: 'Показывает информацию о указанном Бравлере',
 usage: 'brawl-info (Brawler)',
 name: 'brawl-info shelly'
}
