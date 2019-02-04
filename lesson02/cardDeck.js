let suit;
for (let i=1 ; i<=4 ; i++) {
  if (i==1) {
    suit = 'SPADE';
  } else if (i==2) {
    suit = 'HEART';
  } else if (i==3) {
    suit = 'DIAMOND'
  }  else if (i==4) {
    suit = 'CLUB';
  }
  for (let j = 1; j<=13 ; j++) {
    if (j==1) {
      console.log ('Ace of ' + suit);
    } else if (j==11) {
      console.log ('Jack of ' + suit);
    } else if (j==12) {
      console.log ('Queen of ' + suit);
    } else if (j==13) {
      console.log ('King of ' + suit);
    } else {
      console.log ( j + ' of ' + suit);
    }
  }
}
