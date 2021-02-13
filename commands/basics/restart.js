module.exports = {
	name: 'restart',
	aliases: ['reboot', 'reset'],
	code: `$djsEval[
setTimeout(() => {process.exit()} , 1000)

const discord = require('discord.js')
let LynxPro = new discord.MessageEmbed()
.setTitle('Restarting...')
.setDescription('Bot is restarting!')
.setColor('GREEN')

message.channel.send(LynxPro)]
$onlyForIDs[586391264350699551;You Aint The owner lol]`
};
