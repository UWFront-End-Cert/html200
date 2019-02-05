let arr = ['Shiba', 'Husky', 'Samoyed', 'Chihuahua', 'Bulldog']; //Array with five items
console.log(arr); //Print five items

arr.push('Yorki'); //Add Yorki to list
console.log(arr); //Print line

arr.splice(1, 2); //Remove third dog Samoyed
console.log(arr); //Print line

let dogList = arr.join(', ') //joins items together separated by comma and space
console.log(dogList); //Print array separated by comma and space
