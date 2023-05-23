// CONTROL FLOW - SWITCH STATEMENT - are similar to if/else, but more concise for comparing strings, numbers, and Booleans
// Switch statements take in a value and compare it to one or more cases

const dogBreed = 'Toller';

switch (dogBreed) {
    case 'Toller':
        console.log('Your dog is a Canadian breed');
        break;
    case 'Schnauzer':
        console.log('Your dog is a German breed');
        break;
    default: 
        console.log('We do not have info on that breed');
        break;
}



const command = 'fetch';

switch (command) {
    case 'fetch':
    case 'go':
        console.log('Time to run!');
        break;
    default:
        console.log('I do not know that command');
        break;
}