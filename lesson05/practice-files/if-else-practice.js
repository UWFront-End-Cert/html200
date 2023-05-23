// LESSON 5 Example - slide 26
//Check if divisible by 3 and 5. If so, print FizzBuzz
//– Else, check if divisible by 3. If so, print Fizz
//– Else, check if divisible by 5. If so, print Buzz
//– Else, print the number



for(i = 1; i <= 31; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i, 'is FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i, 'Fizz');
    } else if (i % 5 === 0) {
        console.log(i, 'Buzz');
    } else {
        console.log(i, 'This is not divisible with the criteria given')
    }
}


