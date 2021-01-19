// let arr = [['1', '2'], ['a', 'b', 'c']];
// console.log(arr[1][2]);

// // const menu = [[], []];
// const menu = [['1', '2'], ['a', 'b', 'c']];

// console.log(menu);


// Create an array with two arrays inside of it>The first is the four suits of cards>The second is the name of each card ”ace”, “one”...”king”–Console log them in order// Ace of Kings// Two of Kings

// let deckOfCards, csLen, cvLen, i, j;
deckOfCards = [['Hearts', 'Diamonds', 'Clubs', 'Spades'], ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]];
    for (i = 0; i < deckOfCards[0].length; i++) {
        for (j=0; j < deckOfCards[1].length; j++) {
            console.log(deckOfCards[1][j] + ' of ' + deckOfCards[0][i]);
        }
    }

// let card_values, card_suits, csLen, cvLen, i, j;
// card_values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
// card_suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// csLen = card_suits.length;
// cvLen = card_values.length;

// for (i = 0; i < csLen; i++) {
//        for (j = 0; j < cvLen; j++) {
//       console.log(card_values[j] + ' of ' + card_suits[i]);
//   }
// }

let deckOfCards, csLen, cvLen, i, j;
deckOfCards = [['Hearts', 'Diamonds', 'Clubs', 'Spades'], ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]];
    // csLen = deckOfCards[0].length;
    // cvLen = deckOfCards[1].length;
    //     for (i = 0; i < csLen; i++) {
    //     for (j = 0; j < cvLen; j++) {
    //         console.log(deckOfCards[1][j] + ' of ' + deckOfCards[0][i]);
    //     }
    //     }

for (i = 0; i < deckOfCards[0].length; i++) {
    for (j=0; j < deckOfCards[1].length; j++) {
        console.log(deckOfCards[1][j] + ' of ' + deckOfCards[0][i]);
    }
  }

let card_values, card_suits, csLen, cvLen, i, j;
card_values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
card_suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
csLen = card_suits.length;
cvLen = card_values.length;
    for (i = 0; i < csLen; i++) {
       for (j = 0; j < cvLen; j++) {
      console.log(card_values[j] + ' of ' + card_suits[i]);
  }
}


// Use a for loop to console log all of the elements plus the index and a comma>// 3,cats

// let pg33hw = 'Take a sentence of at least five words and a period . Make an array from that sentence and console log the third word .';

// wordArray = pg33hw.split(' ');
// wordArray.forEach(function(element) {console.log(element);});
// console.log(wordArray);
// console.log(wordArray[2]);

// let arr= [1, 3, 5];
//   for (let i= 0; i< arr.length; i++) 
//   {console.log(arr[i]);}

// Write a function that console logs the results of an array, one by one.EXCERCISE
// 
// let arr= ['welcome', 'everything', 'is', 'fine'];
// let str= arr.join(' ');
// let str= arr.join();
// console.log(str);
// console.log(arr);

// let str = 'james@james.com';let arr= str.split('.');console.log(arr);

// var array = ['a', 'b', 'c'];
// array.forEach(function(element) {
//   console.log(element);});

// let arr= ['welcome', 'everything', 'is', 'fine'];

// arr.push("maybe?");

// console.log(arr);
// arr.splice(1,1);
// console.log(arr);
// let newArr = arr.join(' ');
// console.log(newArr);

// // How about looping through a multi-dimension array?
//   let arr= [[1, 3, 5], ['a', 'b', 'c'], [11, 22, 33, 44]];
// for (let i= 0; i< arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++)
//     console.log(arr[i][j])
// }
// Creates an array, with at least 5 strings–Add an element to the end of the end of the array–Remove the third element–Create a string from the elements and comma separate them

//  let arr= ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);
// arr.push('f');
// console.log(arr);
// arr.splice(2,1);
// console.log(arr);
// let str = arr.join(', ');
// console.log(str);