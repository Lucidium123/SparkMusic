module.exports = ({
 name: "loop",
 code: `
 $title[Loop]
 $thumbnail[$userAvatar[$authorID]]
 $color[f1f0f0]
 $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop Enabled!];false;Loop disabled!]]
 $onlyIf[$voiceID!=;You are not in a VC!]`
 });