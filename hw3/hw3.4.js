const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

for ( let s = 0; s < 4; s++) {
  for ( let v= 0; v < 13; v++) {
    let combo = values[v] + ' of '+ suits[s];
    console.log(combo);
  }
}
