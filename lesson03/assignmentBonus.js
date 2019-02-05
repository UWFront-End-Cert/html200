
var cardsDeck = new Array(4);
let i = 0;
let j = 0;

for (i = 0; i<4 ; i++){
  cardsDeck[i] = new Array(13);
}

for(i = 0; i < 4 ; i++){
      if (i == 0){
        suit = 'Heart';
      } else if( i == 1){
        suit = 'Spade';
      } else if( i == 2){
        suit = 'Club';
      } else if( i == 3){
        suit = 'Diamond';
      }
      for (j = 0; j < 13; j++){
          if (j == 0){
            cardsDeck[i][j] = 'Ace of ' + suit;
          } else if (j == 10){
            cardsDeck[i][j] = 'Jack of ' + suit;
          } else if (j == 11){
            cardsDeck[i][j] = 'Queen of ' + suit;
          }  else if (j == 12){
            cardsDeck[i][j] = 'King of ' + suit;
          } else {
            cardsDeck[i][j] = (j+1) + ' of ' + suit;
          }
        }
}

for (i = 0; i < 4 ; i++){
  for (j = 0; j < 13 ; j++){
    console.log (cardsDeck[i][j]);
  }
}
