// L5 Banking App assignment

balance = 1000;

    const bankApp = function(input = prompt('Enter an option: W to withdraw, D to deposit, B for balance or Q to quit.')) {

        switch(input) {

            case input = 'w':
                withdrawalAmt = prompt("Enter amount to withdraw: ");

                if (balance + parseInt(-withdrawalAmt) < 0) {
                    alert('Sorry, negative balance not allowed. Please start again.');
                    bankApp();    
                } 

                if ((balance + parseInt(-withdrawalAmt) >= 0) && (balance + parseInt(-withdrawalAmt) > 299.99)) {
                    balance = balance + parseInt(-withdrawalAmt);
                }
                
                else {    
                    if ((balance + parseInt(-withdrawalAmt) >= 0) && (balance + parseInt(-withdrawalAmt) <= 299.99)) {
                        contPrmpt = prompt('Warning: Your balance will be $' + (balance + parseInt(-withdrawalAmt)) + ' Do you want to continue: Y or N');
                    }
                    
                    if (contPrmpt === 'Y') {
                        balance = balance + parseInt(-withdrawalAmt); 
                    }
                            
                    else { 
                        (alert('You are not making a withdrawal. Your balance will remain at: $' + balance) )
                    }
                }

            bankApp();
            break;
        
            case input = 'd':
                depositAmt = prompt("Enter amount to deposit: ");

                if (depositAmt >= 50000.01) {
                    alert('Sorry, you have a deposit cap of $50,000')
                    bankApp();
                }
                
                else { 
                    balance = balance + parseInt(depositAmt); 
                    alert('Your current balance is: $' + balance);
                    bankApp();
                }
            break;

            case input = 'b':
                alert('Your current balance is: $' + balance);
                bankApp();
            break;
        
            default:
                prompt('Still awaiting your desired option: ');
                bankApp();
            break;

            case input = 'q':
                alert('You are quiting the BankApp. Your balance is $' + balance);
            break;
    }  
    return balance;
}
 // comment this out if calling from button
//  bankApp();


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
