module.exports = {
  name: "removewarn",
  code: `$color[RANDOM]
$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Calm down, Who are you removing the warn]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];-1];$mentioned[1]]
$title[Your warning Has been removed]
$description[<@$mentioned[1]>, Your warning has been removed by $username]`
};