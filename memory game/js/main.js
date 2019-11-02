const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

// Store queen in cardsInPlay
// Store king in cardsInPlay

cardsInPlay.push('queen');
cardsInPlay.push('king')
console.log("User flipped queen");
console.log("User flipped king");

// If both cards stored into cardsInPlay; page will alert "You found a match!"

if (cardsInPlay.length === 2){
	alert("You found a match!")
};
