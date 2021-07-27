// Declare variables for: first name, last name, age
// legal driving age = 16

// Compare the driver's age with the driving age
//    If they are old enough to drive:
//      - console log the first name and last name can drive
//        and how long they've been driving
//    If they are too young
//      - console log a countdown from 5

let a = "Karen";
let b = "Smith";
let c = 32;
let d = 16;
let countdown = 6;

if (c >= d) {
  console.log(a + " " + b + " is of legal driving age, and they've been driving for " + (c - d) + " years.");
} else {
  while (countdown > 0) {
    countdown--;
    console.log(countdown);
  }
}
