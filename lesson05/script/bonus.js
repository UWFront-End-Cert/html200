/*Bank Application
@author Rajvi Doshi
@brief A function that performs banking tasks
*/
function bankApp() {

  let command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");

  let accountBalance = 5000;
  let withdrawal = 0;
  let deposit = 0;

  while (command !== "Q" && command !== "q") {
    switch (command) {
      case "b":
      case "B":
        balanceCheck(accountBalance);
        alert("Your account balance is: $" + accountBalance);
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      case "w":
      case "W":
        withdrawal = prompt("Enter the withdrawal amount");
        accountBalance = withdrawalCheck(withdrawal, accountBalance);
        balanceCheck(accountBalance);
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      case "d":
      case "D":
        deposit = prompt("Enter the deposit amount");
        accountBalance = depositCheck(deposit, accountBalance);
        balanceCheck(accountBalance);
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      default :
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
    }
  }
}

function depositCheck(aDeposit, aBalance) {
  let aNewBalance = 0;
  if (aDeposit > 50000) {
    alert("Deposited amount should be less than $50000.")
    aNewBalance = aBalance;
  } else {
    aNewBalance = parseInt(aDeposit,10) + parseInt(aBalance,10);
    alert("Previous Balance: $" + aBalance + "\n Amount Deposited: $" + aDeposit + "\n New Balance: $"  + aNewBalance);
  }
  return aNewBalance;
}

function balanceCheck(aBalance) {
  let minAccountBalance = 300;
  if (aBalance < minAccountBalance) {
      alert("Your account balance is low.");
  }
}

function withdrawalCheck(aWithdrawal, aBalance) {
  let aNewBalance = 0;
  let minAccountBalance = 300;
  while (aWithdrawal > aBalance) {
    alert("Withdrawal amount is greater than account balance." + "\n Account Balance is: $" + aBalance);
    aWithdrawal = prompt("Enter a new withdrawal amount: ");
  }

  aNewBalance = parseInt(aBalance,10) - parseInt(aWithdrawal,10);

  if (aNewBalance <= minAccountBalance) {
    if(confirm("Account Balance is less than $300 after withdrawal. \n Press OK to proceed")) {
      alert("Your New Account Balance is: $" + aNewBalance + "\n Amount Withdrawn is: $" + aWithdrawal);
    } else {
      aNewBalance = aBalance;
    }
  } else {
    alert("Your New Account Balance is: $" + aNewBalance + "\n Amount Withdrawn is: $" + aWithdrawal);
  }
  return aNewBalance;
}
