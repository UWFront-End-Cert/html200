// Do a console log after each item
//     Create an array, with at least 5 strings
//     Add an element to the end of the array
//     Remove the third element
//     Create a string from the elements and comma separate them

// let l3c1 = [];
l3c1 = [["Do a console log after each item"], ["Create an array, with at least 5 strings"], ["Add an element to the end of the array"], ["Remove the third element"], ["Create a string from the elements and comma separate them"]];
const origArr = l3c1;
console.log(origArr);
console.log(l3c1);
console.log(l3c1[2]); // returns array value not text
let addedItem = l3c1.push("Remember, indexing is zero based.");
console.log(addedItem); // why does this return a 6?
console.log(l3c1[5] + " (previous element added to array)"); // here text
console.log((l3c1[2]) + ' ' + (addedItem)); // text and a 6
let splicedItem = l3c1.splice(2,1); // origArr loses element, why when const 
console.log(l3c1);
l3c1.join('. ') + ' The following element was removed from the array - ' + '(' + splicedItem + ').';
// console.log(l3c1); // including line drops prev text output



// let l3c1 = [];
// l3c1 = [["Do a console log after each item"], ["Create an array, with at least 5 strings"], ["Add an element to the end of the array"], ["Remove the third element"], ["Create a string from the elements and comma separate them"]];
// console.log(l3c1);
// console.log(l3c1[2]);
// let addedItem = l3c1.push("Remember, indexing is zero based.");
// console.log(l3c1[5] + " (previous element added to array)");
// console.log(l3c1[2]) + ' ' + addedItem;
// let splicedItem = l3c1.splice(2,1);
// console.log(l3c1);
// l3c1.join(', ');
// l3c1.join('. ') + ' The following element was removed from the array - ' + '(' + splicedItem + ').';
