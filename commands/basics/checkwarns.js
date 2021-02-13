module.exports = {
  name: "checkwarns",
  code: `
$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Please Mention Someone]
$title[TOTAL WARNINGS]
$color[RANDOM]$description[$username[$mentioned[1]] Has
$getUserVar[warn;$mentioned[1]] Warnings!]
$argsCheck[>1;Please mention user]`
};