// create an array with at least 5 strings
let farmAnimals = ['pig', 'cow', 'sheep', 'duck', 'goat'];
console.log(farmAnimals);

// add an element to the end of the array
farmAnimals.push('chicken');
console.log(farmAnimals);

// remove the third element
farmAnimals.splice(2, 1);
console.log(farmAnimals);

// create a string from the elements and comma separate them
const farmAnimalsString = farmAnimals.join(' ');
console.log(farmAnimalsString);
