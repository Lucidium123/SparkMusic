module.exports = {
name: "lyrics",
code: `$if[$argsCount==0]
$djsEval[(async() =>{const fetch = require('node-fetch')
var body = await fetch('https://api.dbdjs.repl.co/lyrics?song='+encodeURIComponent('$songinfo[title]'))
 body = await body.json()

const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle('Lyrics for $songInfo[title]')
.setDescription(body.lyrics)
.setColor('RANDOM')
message.channel.send(embed)
})()]
$elseIf[$argsCount>0]
$djsEval[(async() =>{const fetch = require('node-fetch')
var body = await fetch('https://api.dbdjs.repl.co/lyrics?song='+encodeURIComponent('$message'))
 body = await body.json()

const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle('Lyrics for $message')
.setDescription(body.lyrics)
.setColor('RANDOM')
message.channel.send(embed)
})()]
$endelseIf
$endif
$botTyping
`
}