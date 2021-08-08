// I couldn't figure out how to add the comma after the index and before the element returned by the array
// :)

// Create an array, with at least 5 strings
let plants = ["monsteras", "calatheas", "pothos", "ferns", "peperomias"];

// Use a for loop to console log all of the elements, plus the index and a comma
plants.forEach(function (item, index, array) {
  console.log(index, item);
});
