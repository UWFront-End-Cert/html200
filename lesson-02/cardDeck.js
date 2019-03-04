var card_suits = 'blank';

// Outer for loop to change suits
for(let i=0; i<4; i++){
  //Conditions for suits
  if(i==0){
    card_suits = 'Hearts';
  }
  else if(i==1){
    card_suits = 'Spades';
  }
  else if(i==2){
    card_suits = 'Diamonds';
  }
  else{
    card_suits = 'Clubs';
  }

  //inner for loop to change card numbers
  for(let j=1; j<14; j++){
    //conditions for card numbers
    if(j==1){
      console.log("Ace of " + card_suits)
    }
    else if(j==11){
      console.log("Jack of " + card_suits)
    }
    else if(j==12){
      console.log("Queen of " + card_suits)
    }
    else if(j==13){
      console.log("King of " + card_suits)
    }
    else{
      console.log(j + " of " + card_suits)
    }
  }
}
