//Write a simple webpage opens an alert that takes a number from the user and squares it and opens an alert with the result. You must use a function and an event handler. 


let number = prompt('please enter any number here!');

console.log(number); 

alert('The number you typed in was ' + number + ' The number squared is ' + Math.pow(number, 2)); 

// squared number 

function myFunction() {
  document.getElementById('button').innerHTML = 'Refresh the page. To start a new calculation.(Optional)';
}

// Optional: Take two numbers from the user and return the result.


let x = prompt('Please enter in 1 number');
let y = prompt('Please enter in a 2nd number');

function twoNumb(number1, number2) {
  x = number1;
  y = number2;
  return (x,y);
}
 
twoNumb(x,y);
console.log(x,y);
