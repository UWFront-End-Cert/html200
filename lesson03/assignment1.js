let arrStr = [];

arrstr = ['John', 'loves', 'to', 'play', 'with', 'his'];

console.log('Original array : ' + arrstr );

arrstr.push('car');
console.log('1. Added a String at the end of the array : ' + arrstr );

arrstr.splice(2,1);
console.log('2. Removed 3rd String from array : ' + arrstr );

/* I have used hyphen instead of comma, beacuse comma was by default*/

let arrstr1 = arrstr.join('-');

console.log('3. String from array separated with hypen : ' + arrstr1 );
