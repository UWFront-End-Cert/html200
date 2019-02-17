// ------------ This is the code I submitted
// let enterNumber = prompt("Enter a number");
//
// let value = Number(enterNumber);
//
// var btn = document.querySelector('button');
//
// btn.onclick = function() {
//   let valueSquared = value * value;
//   alert("Your number squared = " + valueSquared);
// }

// -------------This is the code we did in class
let num = prompt("Enter a number");

function squareANumber(numberToSquare) {
  let squaredNumber = numberToSquare * numberToSquare;
  alert(squaredNumber);
}

squareANumber(Number(num));
