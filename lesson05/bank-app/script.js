let currentBalance = 0;

function bankingApp() {
  let userPrompt = prompt("bank menu: w = withdrawal | d = deposit | b = balance |  q = quit");

  switch (userPrompt) {
    case "w":
      function withdrawFunds() {
        let withdrawAmount = parseFloat(prompt("Withdraw amount:"));
        currentBalance = currentBalance - withdrawAmount;
        console.log("Withdraw: $" + withdrawAmount + "; New balance: $" + currentBalance);
      }
      withdrawFunds();
      break;

    case "d":
      function depositFunds() {
        let depositAmount = parseFloat(prompt("Deposit amount:"));
        currentBalance = currentBalance + depositAmount;
        console.log("Deposit: $" + depositAmount + "; New balance: $" + currentBalance);
      }
      depositFunds();
      break;

    case "b":
      function checkBalance() {
        console.log("Current balance: $" + currentBalance);
      }
      checkBalance();
      break;

    case "q":
      function quitProgram() {
        let quit = "Quit the program.";
        console.log(quit);
      }
      quitProgram();
      break;

    default:
      console.log("That menu is not available.");
  }
}
