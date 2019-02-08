let enterNumber = prompt("Enter a number");

let value = Number(enterNumber);

function square(value) {
  valueSquared = value * value;
  return valueSquared;
}

square(value);

alert("Your number squared = " + valueSquared)
