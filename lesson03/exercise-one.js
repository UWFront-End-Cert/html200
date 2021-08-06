// Create an array, with at least 5 strings
let arr = ["monsteras", "calatheas", "pothos", "ferns", "peperomias"];

// Add an element to the end of the array
arr.push("succulents");

// console log results of the statements above
// console.log(arr);

// Remove the third element
arr.splice(2, 1);

// Create a string from the elements and comma separate them
let str = arr.join(" ");
console.log(str);
