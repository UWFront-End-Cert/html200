/*Bank Application
@author Rajvi Doshi
@brief A function that performs banking tasks
*/
function bankApp(){

  let command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");

  let balance = 1000;
  let withdrawal = 0;
  let deposit= 0;

  while (command !== "Q" && command !== "q") {
    switch (command) {
      case "b":
      case "B":
        alert("Your account balance is :" + " " + balance);
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      case "w":
      case "W":
        prompt("Enter the withdrawal amount");
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      case "d":
      case "D":
        prompt("Enter the deposit amount");
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
      default :
        command = prompt ("Press B: Balance, W: Withdrawal, D: Deposit, Q: Quit");
        break;
    }
  }
}
