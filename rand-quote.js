$(document).ready(function() {
    // displays a quote generated randomly
});

$(".quoteBtn").click(function() {
    var quoteString = randomQuote();
    $(".quote").text(quoteString);
});

function randomQuote() {
    var quotes = [
        "Get in loser. We're going shopping.",
        "Ex-boyfriends are off-limits to friends. That’s just, like, the rules of feminism.",
        "She doesn’t even go here!",
        "Stop trying to make fetch happen. It's not going to happen."
    ];

    var randIndex = getRandomInt(0, quotes.length); // numbers from 0 to the length of the quote length
    return quotes[randIndex];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}