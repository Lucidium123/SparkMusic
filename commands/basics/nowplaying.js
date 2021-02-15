module.exports = ({
  name: "nowplaying",
  channel: "$channelID",
  code: `
$title[SongInfo (NP)]
$description[
Currently Playing: $songInfo[title]
Song Description: $songInfo[description]
Duration: $songInfo[duration]
Requested By: $songInfo[userID]
Artist: $songInfo[publisher]
Link: $songInfo[publisher_url]
$songInfo[thumbnail]]
$onlyIf[$voiceID!=;{color:RED}{description: Please join a vc first}]
$onlyIf[$queueLength>0;{color:RED}{description: Queue is empty}]`
})
