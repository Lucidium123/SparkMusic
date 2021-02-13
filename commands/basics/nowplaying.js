module.exports = ({
  name: "nowplaying",
  code: `
$channelSendMessage[$channelID;{color:RANDOM}{description: Now Playing $songInfo[title] - $songInfo[duration]s}]
$onlyIf[$voiceID!=;{color:RED}{description: Please join a vc first}]
$onlyIf[$queueLength>0;{color:RED}{description: Queue is empty}]`
})