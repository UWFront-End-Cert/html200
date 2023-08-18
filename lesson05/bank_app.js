let yourBalance = 50000;
// Created starting balance, create function to hold all of our code when the user starts, get user's input, pass input to switch statement, in switch statement, decide what needs to be done.
const yourAccount = function(){
    input = prompt('What would you like to do today? Q to Quit, W to Withdraw, D to Deposit, and B to View Balance');
    switch(input){
        case input = 'B', 'b':
            alert(yourBalance);
            break;
        case input = 'Q', 'q':
            alert('Goodbye');
            break;
        case input = 'D', 'd':
            depositInput = prompt('Enter your deposit here:');
            yourBalance = parseInt(depositInput) + yourBalance;
            alert(yourBalance);
            break;
        case input = 'W', 'w':
            withdrawInput = prompt('Enter your withdrawal here:');
            if (yourBalance = <=0);
            yourBalance = yourBalance - parseInt(withdrawInput);
            alert(yourBalance);
            break;
    }
};
