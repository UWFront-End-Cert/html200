//Create an array, with at least 5 strings
let fruits = ['apple', 'banana', 'cherry', 'mango', 'peach'];

console.log(fruits);

//Add an element to the end of the end of the array
fruits.push('Kiwi');

console.log(fruits);

//Remove the third element
fruits.splice(2, 1);

console.log(fruits);

//Create a string from the elements and comma separate them
let fruitsList = fruits.join(', ');

console.log(fruitsList);
