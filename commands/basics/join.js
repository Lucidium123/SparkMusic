module.exports = ({
  name: "join",
  code: `$djseval[const voiceChannel = d.message.member.voice.channel;

 voiceChannel.join()]`
})