const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardId = cards[0, 1, 2, 3]
///add the card that the user flipped
cardsInPlay.push(cards[cardId]);
///create a function to store all steps that should happen when the user flips a card.
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])
	
};
flipCard(0);
flipCard(2);
checkForMatch();
//var cardOne = cards[0];
//cardsInPlay.push('cardOne');
//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push('cardTwo')
//console.log("User flipped " + cardTwo);









