module.exports = {
  name: "warn",
  code: `
$onlyIf[$checkContains[$message;check]==false;]
$title[WARN]
$onlyPerms[manageroles;You cannot use this command]
$color[RANDOM]
$description[$username[$mentioned[1]]
has been warned by $username now they have recived a warning!]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$argsCheck[>1;Please mention user]`
};