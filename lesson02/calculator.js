const x = 14;
const y = 3;
const z = 2;
let a = 1 + y;
const b = 9;

console.log(`The remainder of 14 divided by 3 is` + ` ` + 14 % 3);
console.log(`Does 4 + 2 = 3 x 2?`);
if (z + a === y * 2) {
  console.log(`Yes`);
} else {
  console.log(`No`);
}
console.log(`What is 10% of 14?`);
console.log(x / 10);
console.log(`I want to buy a $15 concert ticket. I have $9 in cash and three items I can pawn for $4 each.  Can I afford the ticket?`)
if (b + (3 * 4) >= 15) {
  console.log(`Yes!!`)
} else {
  console.log(`No.`)
}
console.log(`How many dollars will I have left over?`)
console.log(9 + (4 * 3) - 15);

