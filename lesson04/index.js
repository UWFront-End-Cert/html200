// 1.Create an array, with at least 5 strings
// 2. Add an element to the end of the end of the array
//3. Remove the third element
//4. Create a string from the elements and comma separate them
// See Codepen = https://codepen.io/umbarlumbar/pen/gbppjbb?editors=1111
// New branch added off of Master



// 1.Create an array, with at least 5 strings

let arr =['cat','bunny','babypig','dog','hamster'];

console.log (arr [0]);

// result will be 'cat', because of zero index being first element



// 2. Add an element to the end of the end of the array

let cuteanimals=['cat','bunny','babypig','dog','hamster'];
cuteanimals.push('snake');

console.log (cuteanimals)

// result will be snake added to the end of the array
// [object Array] (6)
// ["cat","bunny","babypig","dog","hamster","snake"]

//3. Remove the third element


cuteanimals.splice(1,3);

console.log (cuteanimals)

// result is, [object Array] (3) --> bunny and dog have been removed
["cat","hamster","snake"]

//4. Create a string from the elements and comma separate them

let str=arr.join (' , ');
console.log (str);

//output is "cat , bunny , babypig , dog , hamster"


