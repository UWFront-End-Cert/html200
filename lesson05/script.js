// script.js

function squareNumber() {
    const input = prompt("Enter a number:");
    const number = parseFloat(input);
    
    if (isNaN(number)) {
        alert("That's not a valid number!");
        return;
    }
    
    const result = number * number;
    alert("The square of " + number + " is " + result);
}

document.getElementById("squareBtn").addEventListener("click, squareNumber");
