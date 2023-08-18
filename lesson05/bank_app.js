let yourBalance = 50000;

const yourAccount = function(){
    input = prompt('What would you like to do today? Q to Quit, W to Withdraw, D to Deposit, and B to View Balance');
    switch(input){
        case input = 'B':
            alert(yourBalance);
            break;
        case input = 'Q':
            alert('Goodbye');
            break;
        case input = 'D':
            depositInput = prompt('Enter your deposit here:');
            yourBalance = parseInt(depositInput) + yourBalance;
            alert(yourBalance);
            break;
        case input = 'W':
            withdrawInput = prompt('Enter your withdrawal here:');
            yourBalance = yourBalance - parseInt(withdrawInput);
            if (yourBalance <=0){
                alert('Warning: Approaching Zero');
            }
            alert(yourBalance);
            break;
    }
};
