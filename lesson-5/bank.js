let bankMessage = alert('Welcome to Get Rich Quick Bank');
let promptWithdrawal = 'W';
let promptDeposit = 'D';
let promptBalance = 'B';
let promptQuit = false;
let total = 0;
let balance = 1000;

while (promptQuit !== null && promptQuit === false) {
  let bankAsk = prompt('How Can I help you today? To make a withdrawal, type W. To check your balance, type B. To deposit money, type D. To quit this program, type Q');

  if (bankAsk !== null && bankAsk.toUpperCase() === 'Q') {
    promptQuit = true;
  } else if (bankAsk !== null && bankAsk.toUpperCase() === promptWithdrawal) {
      promptWithdrawal = Number(prompt ('How much would you like to withdraw?'));
      alert('Success! The money is yours');
      balance = balance - promptWithdrawal;
  } else if (bankAsk !== null && bankAsk.toUpperCase() === promptDeposit) {
      promptDeposit = Number(prompt('How much would you like to deposit?'));
      alert('Cha Ching! The sound of green');
      balance = balance + promptDeposit;
  } else if (bankAsk !== null && bankAsk.toUpperCase() === promptBalance) {
      promptBalance = Number(alert('Your balance is' + ' ' + '$' + balance));
  } else {
      alert('Hmm, try again');
    }
}

console.log(alert('Goodbye!'));




























// function balanceCounter() {
//   total = total + buttonValue;
//   alert("Total: " + '$' + total);
// }



// When user Enter W to withdraw, prompt aks how much?

// if bankAsk = bankDeposit {
//   prompt('How much would you like to withdrawl');
// }

// if bankAsk = bankBalance {
//   prompt('How much would you like to withdrawl');
// }
