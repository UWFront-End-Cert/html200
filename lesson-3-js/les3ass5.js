let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
let number = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
let group = [suits, number];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++)
    console.log(group[1][j], 'of', group[0][i]);
}