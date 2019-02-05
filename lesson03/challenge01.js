let euroCapitals = ['Brussels','London', 'Madrid', 'Moscow', 'Paris'];
euroCapitals.push('Rome');
euroCapitals.splice(2, 1);
let str = euroCapitals.join(', ');

console.log(str);
