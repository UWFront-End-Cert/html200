let balance = 1000;

alert(' Welcome to the Bank of An, Press W for Withdrawls, D for Deposits, B to see current Balance, or Q to Quit.')

document.onkeydown = function (e) {
    switch (e.key) {
        case 'w':
            withdrawAmt = prompt('how much would you like to withdraw')
            withdrawAmt = Number(withdrawAmt)
            balance = balance - withdrawAmt
            break;
        case 'W':
            withdrawAmt = prompt('how much would you like to withdraw')
            withdrawAmt = Number(withdrawAmt)
            balance = balance - withdrawAmt
            break;
        case 'd':
            depositAmt = prompt('how much would you like to deposit')
            depositAmt = Number(depositAmt)
            balance = balance + depositAmt
            break;
        case 'D':
            depositAmt = prompt('how much would you like to deposit')
            depositAmt = Number(depositAmt)
            balance = balance + depositAmt
            break;

        case 'b':
            alert('your current balance is($): '+balance)
            break;
        case 'B':
            alert(balance)
            break;

        case 'q':
            alert('Ok, have a nice day')
            balance = 1000;
            break;
        case 'Q':
            alert('Ok, have a nice day')
            balance = 1000;
            break;
        default:
        alert('this key press is not supported')
    }
};
// ****old code****
// function withdraw(){
//   withdrawAmt = prompt('how much would you like to withdraw')
//   withdrawAmt = Number(withdrawAmt)
//   balance = balance - withdrawAmt
// }

// set the user's beginning balance to 1000
// alert the user possible commands of w, d, b, q.
// if the user presses w or W, then prompt how much would they like to Withdrawl
//w keycode = 87 || 119
// Subtract the prompted withdrawl amount from the balance
// if the user presses d or D, then prompt how much would they like to Deposit
//d keycode = 68 || 100
// Add the prompted deposit amount to the balance
// if the user clicks b or B, then alert the current balance
//b keycode = 66 || 98
// if the user clicks q or Q, then quit the program.
//q keycode = 81 || 113
// don't do anything on all other keypresses.
