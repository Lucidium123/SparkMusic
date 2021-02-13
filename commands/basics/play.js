module.exports = ({
  name: "play",
  code:  ` $channelSendMessage[$channelID;{color:RANDOM}{description: 🎵 Now Playing $songInfo[title] - $songInfo[duration]s}] $playSong[$message;{colod:RED}{description: Oops! Something went wrong please try again}] $onlyIf[$message!=;{colod:RED}{description: Please provide a valid Link/Name}] $onlyIf[$voiceID!=;{color:RED}{description: Please Join a Voice Channel And try again}]`
})