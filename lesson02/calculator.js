const x = 4;
let y = 2 + 3;
let z = 6 - 1;
let w = 20 % 7;
let a = x * w * y -z / 2;
const v = (x + y + z + w) * a;
const b = (((9 + x) * 2) * a + v / w);

console.log(x * w);
console.log(x * w * y);
console.log(x * w * y - z);
console.log(x * w * y - z / 2);
console.log(y - z / 2);
console.log(a);
console.log(v);
console.log(v / a);
console.log(v / a * z % w);
console.log(b + z);