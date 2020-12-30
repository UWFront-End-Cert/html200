// Create an array that has at least 5 strings:
// Use a for loop to console log all of the elements plus the index and a comma
// Example:  1,cats  / 2,dogs

l3c3 = 'Create an array that has at least 5 strings:';
l3c3Array = l3c3.split(' ');
l3c3second = 'Use a for loop to console log all of the elements plus the index and a comma.';
l3c3secondArray = l3c3second.split(' ');

// found following first and made it work 
l3c3Array.forEach(function(element, index) {
    console.log(index + ',' + element);});
	
// worked following out on my own
 for (let i = 0; i < l3c3secondArray.length; i++) {
   console.log(i + ',' + l3c3secondArray[i]);
 } // took time to sort 'i' was both a counter and pointer


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

