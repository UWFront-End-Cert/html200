let x = 1;
let y = 2;
const a = 'this';
const b = 'that';

if (x % 2 == 1) {
  console.log(a);
} else {
  console.log(b);
} 

let r = (x + 2);

if (r <= 5) {
  console.log(b);
} else {
  console.log(a+b);
}

let t = (y + 1);

if (x + t > 1) {
  console.log(a + 'and' + b);
}