let test = ['one', 'two', 'three', 'four', 'five'];
test.push('six');
test.splice(2,1);

let string = test.join(',');
console.log(string);