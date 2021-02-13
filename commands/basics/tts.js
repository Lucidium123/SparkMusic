module.exports = ({

 name: "tts",

 code: 

`$djsEval[const discordTTS = require("discord-tts");

const voiceChannel = d.message.member.voice.channel;



const decir = d.args.join(' ')

if(!voiceChannel) d.message.channel.send('Enter a voice channel and try again.')

if(!decir) d.message.channel.send('What do you want me to say?')

voiceChannel.join().then(connection => {

const stream = discordTTS.getVoiceStream(decir)

const dispatcher = connection.play(stream);

dispatcher.on("finish",()=>voiceChannel.leave())

})]
$suppressErrors`

 

 });