var quotes = [
    "Get in loser. We're going shopping.",
    "Ex-boyfriends are off-limits to friends. That’s just, like, the rules of feminism.",
    "She doesn’t even go here!",
    "Stop trying to make fetch happen. It's not going to happen.",
    "I gave him everything! I was half a virgin when I met him!",
    "Raise your hand if you have ever been personally victimized by Regina George.",
    "That’s why her hair is so big. It’s full of secrets.",
    "I don’t hate you because your fat. You’re fat because I hate you.",
    "I’m not a regular mom, I’m a cool mom.",
    "Whatever, I’m getting cheese fries.",
    "Is butter a carb?",
    "Don't have sex, because you will get pregnant and die.",
    "But if you're gonna drink, I'd rather you do it in the house.",
    "It's like I have ESPN or something.",
    "I'm a mouse, duh.",
    "I can't help that I've got a heavy flow and a wide-set vagina.",
    "You all have got to stop calling each other sluts and whores. It just makes it ok for guys to call you sluts and whores.",
    "You can't sit with us!",
    "On Wednesdays we wear pink.",
    "So you agree? You think you're really pretty?"

];

$(".quoteBtn").click(function() {
    var quoteString = randomQuote();
    $(".quote").text(quoteString);
    $("#tweetq").attr("href", "https://twitter.com/intent/tweet?text=" + quoteString);
});


function randomQuote() {
    // numbers from 0 to the length of the quote array non-inclusive
    var randIndex = getRandomInt(0, quotes.length);
    return quotes[randIndex];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}