let cardDeck = [['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'], ['Hearts', 'Diamonds', 'Spades', 'Clubs']];

for (let i = 0; i < cardDeck[1].length; i++) {
  for (let j = 0; j < cardDeck[0].length; j++) {
    console.log(cardDeck[0][j] + ' of ' + cardDeck[1][i]);
  }
}
