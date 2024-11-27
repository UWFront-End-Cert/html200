let countDown = 5;

while (countDown >= 0) {
    console.log(countDown);
    countDown--;
}


//User input variable

let countDown = parseInt(prompt("Enter the countdown number:"));

if (!isNaN(countDown)) {
    while (countDown >= 0) {
        console.log(countDown);
        countDown--;
    }
} else {
    console.log("Invalid input. Please enter a number.");
}