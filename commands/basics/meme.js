module.exports = ({
 name: "meme",
 code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title;error];$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;error]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url;error]]
$color[RANDOM]`
})