
// Yes, it looks like you may have some scoping trouble with the inputs you're asking for. 
// Your withdrawal function at the end can't see the input prompt you ask for in your switch.
// First, I'd recommend enclosing your switch in the bankApp function and then calling the 
// bankApp() at the end of your code (and maybe also console log there). Your case for deposit 
// is perfect and works great. I would just try to mirror that for the withdrawal. You don't need that extra withdrawal function at the end.
// Your variable of balance outside the switch is good and you are reassigning it's value 
// with "balance = balance + parseInt(input)". So recreating this for withdrawal will also work.

// so much closer 1/28
    balance = 1000;

    const bankApp = function(input = prompt('Enter an option: W to withdraw, D to deposit, B for balance or Q to quit.')) {

    switch(input) {

            case input = 'w':
//         Enter W to withdraw. The user will be prompted again to enter an amount to withdraw.
//         After withdrawing money, they should be able to type another option.
                input = prompt("Enter amount to withdraw: ");
                    balance = balance + parseInt(-input);
                alert(balance);
                bankApp();
            break;
        
            case input = 'd':
                input = prompt("Enter amount to deposit: ");
                    balance = balance + parseInt(input);
                alert(balance);
                bankApp();
            break;

            case input = 'b':
                // Balance does display in this case
                alert(balance);
                bankApp();
            break;
        
            default:
                prompt('Still awaiting your desired option: ');
                bankApp();
            break;

            case input = 'q':
                alert('You are quiting the BankApp. Your balance is ' + balance);
                //  comment above for ->> Enter Q to quit (immediately quits the program).
            break;
    }  
    return balance;
}
 // comment this out if calling from button
//  bankApp();
console.log(balance); 

// 1/28 above


// ******************

// Regular Challenge: Create a simple HTML site with a JavaScript file that is a bank application.

// Create a bank application.

//     The user should see a prompt so they can type which action to perform.
//     The user will have a list of 4 actions to choose from.
//         Enter Q to quit (immediately quits the program).
//         Enter W to withdraw.
//         The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
//         Enter D to deposit.
//         The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
//         Enter B to view balance.
//         The user will see their balance. Afterwards, they should be able to type another option.
//     The program will loop asking for input until the user enters Q.

// Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!

//     The user should not be able to make excessive withdrawals (no negative balances).
//     The user should have a deposit cap of $50,000.
//     The user should receive a warning to protect against low balances.
//     Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
