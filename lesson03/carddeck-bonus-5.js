let cardDeck = [['Hearts', 'Spades', 'Diamonds', 'Clubs'], ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']];

for (let i = 0; i < 4; i++) {

  for (let j = 0; j < 13 ; j++) {

    console.log(cardDeck[1][j] + ' ' + 'of' + ' ' + cardDeck[0][i]);

  }

}
