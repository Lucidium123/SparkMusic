const dbd = require("dbd.js")
const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const discordTTS = require("discord-tts");


const bot = new dbd.Bot({
  token: "Token Here :D",
  prefix: "Prefix Here :D"
})

bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
  const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`)
    bot.command(command)
  }
}

bot.onReactionAdd()
bot.reactionAddCommand({
  channel: "$channelid",
  code: `

$if[$findtextsplitindex[$messageid]==0]
$setservervar[starchmsg;$getservervar[starchmsg]$channelsendmessage[$getservervar[starch];$reactioncount[$channelid;$messageid;⭐] $replacetext[$replacetext[$replacetext[$replacetext[$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=5]$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=10]$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=20];truetruetrue;];falsetruetrue;💫];falsefalsetrue;🌟];falsefalsefalse;⭐] <#$channelid>
{description:**Content:**\n$getmessage[$channelid;$messageid;content]\n**Source:**\n[Jump to!\\](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{author:$username[$authormessage]}{footer:$messageid:$useravatar[$authormessage]}{timestamp};yes]/]
$setservervar[starmsg;$getservervar[starmsg]$messageid/]
$else
$editmessage[$advancedtextsplit[$getservervar[starchmsg];/;$findtextsplitindex[$getservervar[starmsg]]];$reactioncount[$channelid;$messageid;⭐] $replacetext[$replacetext[$replacetext[$replacetext[$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=5]$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=10]$checkcondition[$reactioncount[$channelid;$messageid;⭐]>=20];truetruetrue;];falsetruetrue;💫];falsefalsetrue;🌟];falsefalsefalse;⭐] <#$channelid>
{description:**Content:**\n$getmessage[$channelid;$messageid;content]\n**Source:**\n[Jump to!\\](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{author:$username[$authormessage]}{footer:$messageid:$useravatar[$authormessage]}{timestamp};$getservervar[starch]]
$endif
$textsplit[$getservervar[starmsg];/]

$onlyif[$getmessage[$channelid;$messageid;userID]!=$clientid;]
$onlyif[$emojitostring==⭐;]
$onlyif[$getservervar[starch]!=;]
$suppresserrors`
})

bot.command({
  name: "starboard",
  code: `$sendmessage[Add a channel <#$splittext[1]> . . .;no]
$setservervar[starch;$splittext[1]]
$textsplit[$createchannel[starboard;text;yes]; ]
$wait[5s]
$sendmessage[Making channel . . .;no]
$onlybotperms[managechannels;managemessages;{description:PizzaGuard does not have permission to \`MANAGE_CHANNELS\`\`MANAGE_MESSAGES\`}{color:ff2050}]
$wait[5s]
$sendmessage[Prepare channel . . .;no]
$onlyperms[manageserver;{description:You don't have permission to \`MANAGE_SERVER\`}{color:ff2050}]
$onlyif[$serverchannelexists[$getservervar[starch]]==false;{description:Starboard channel is on <#$getservervar[starch]>}{color:ff2050}]
$cooldown[5s;{description:Please wait %time%}{color:ff2050}] `
})

bot.command({
  name: "setreqstar",
  code: `$setservervar[reqstar;$message[1]]
$description[Successfully set \`🌟\` req to \`$message[1]\`]
$color[GREEN]
$onlyif[$isnumber[$message[1]]==true;{title:**Error in $message[1]**}{description:Correct use \n\`\`\`\n$getservervar[prefix]setreqstar < 1 - ? >\n\`\`\`}{footer:? Means, you can set between 1 to infinity }]
$onlyif[$getservervar[starch]!=;{description:No \'starboard\' channel yet, please create by typing \`$getservervar[prefix]starboard\`}{color:ff2050}]
$onlyperms[manageserver;{description:You don't have permission to \`MANAGE_SERVER\`}{color:ff2050}]
$cooldown[5s;{description:Please wait %time%}{color:ff2050}]`
})

bot.variables({
  starmsg: "",
  reqstar: "0",
  starch: "",
  starchmsg: "",
  warn: "0",
  channels: "not set"
})

bot.status({
  text: "S!help",
  type: "PLAYING",
  time: 12
})
