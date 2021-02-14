module.exports = ({
    name: "loop",
    aliases: ['repeat'],
    code: `
    $elseif[$message[1]==song]
    $loopSong
    $title[Loop Manager]
    $description[Now looping the current song playing!]
    $author[Lucid]
    $color[#E5E5E5]
    
    $elseIf[$message[1]==queue]
    $loopQueue
    $title[Loop Manager]
    $description[Now looping the queue!]
    $author[Lucid;https://cdn.discordapp.com/avatars/586391264350699551/78f1439167e0495373e4ab579e16910a.webp?size=128]
    $color[#E5E5E5]
    $elseIf[$message[1]==stop]
    $onlyIfMessageContains[$loopStatus;song;queue;Loop isn't currently active!]
    $title[Loop Manager]
    $description[Sucessfuly paused the loop status!]
    $endelseIf
    $endelseif
    $argsCheck[>1;Please provide something to loop (song or queue)!]
    
    `
    })