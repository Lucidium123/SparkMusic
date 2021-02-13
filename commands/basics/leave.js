module.exports = ({
  name: "leave",
  code: `$djseval[const voiceChannel = d.message.member.voice.channel;

 voiceChannel.leave()]`
})