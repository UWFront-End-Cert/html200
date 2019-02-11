let enterNumber = prompt("Enter a number");

let value = Number(enterNumber);

var btn = document.querySelector('button');

btn.onclick = function() {
  let valueSquared = value * value;
  alert("Your number squared = " + valueSquared);
}
