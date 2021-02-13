module.exports = ({
 name: "avatar",
 aliases: ['av', 'pfp'],
 code: `$color[BLUE]
 $title[$username[$findUser[$message]]'s Avatar;$userAvatar[$findUser[$message]]]
 $image[$userAvatar[$findUser[$message]]]
 $addTimestamp`
})