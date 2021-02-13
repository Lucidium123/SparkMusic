module.exports = ({
 name: "ban",
 code: `
$ban[$mentioned[1]]
$channelSendMessage[$channelID;{description:✅ | $username Throwed Ban Hammer at $username[$mentioned[1]]#discriminator[$mentioned[1]]}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$onlyIf[$mentioned[1]!=$authorID;You can't ban yourself]
$onlyIf[$mentioned[1]!=;You must mention someone.]
$onlyPerms[ban;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`Ban\` permissions to use this command}]`
 })