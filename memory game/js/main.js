const cards = [
{
	rank: 'queen',
	cardImage: 'images/queen-of-hearts.png',
	suit: 'hearts'
},
{
	rank: 'queen',
	cardImage: 'images/queen-of-diamonds.png',
	suit: 'diamonds'
},
{
	rank: 'king',
	cardImage: 	'images/king-of-hearts.png',
	suit: 'hearts'
},
{
	rank: 'king',
	cardImage: 'images/king-of-diamonds.png',
	suit: 'diamonds'
}
];
const cardsInPlay = [];
///add the card that the user flipped
cardsInPlay.push(cards['queen']);
cardsInPlay.push(cards['king']);
///check for a match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}
///create a function to store all steps that should happen when the user flips a card.
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank)
	
};
flipCard(0);
flipCard(2);
checkForMatch();










