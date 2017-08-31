console.log('Am I here?')

function silenceTrump(tweet) {
    var convert = tweet.split("");
    console.log(convert);
    for(var i = 0; i <= convert.length-1; i++) {
        console.log(convert[i]);
    }
}
silenceTrump("test")