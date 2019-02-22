let balance = 0;

while (balance >= 0) {

  let enteredOption = prompt('Enter Q to quit, Enter W to withdraw, Enter D to deposit, Enter in B to view balance.')

  if (enteredOption.toUpperCase() == 'Q') {
    break;
  } else if (enteredOption.toUpperCase() == 'W') {
    let withdrawAmount = prompt('Enter in amount to withdraw: ');
    if (withdrawAmount > balance) {
      alert('You cannot withdraw more than your balance');
    } else if (withdrawAmount <= 0) {
      alert('You cannot withdraw negative or 0.')
    } else {
      balance = balance - Number(withdrawAmount);
      if (balance <= 300) {
        alert('Your balance is low');
      }
    }

    alert('New balance is: $' + balance);
  } else if (enteredOption.toUpperCase() == 'D') {
    let depositAmount = prompt('Enter in amount to deposit: ');

    if (depositAmount > 50000) {
      alert('You cannot deposit more than $50,000');
    } else {
      balance = balance + Number(depositAmount);

    }

    alert('New balance is: $' + balance);

  } else if (enteredOption.toUpperCase() == 'B') {

    alert('New balance is: $' + balance);

  }

}

alert("Thanks for visiting our bank! See you again.")
