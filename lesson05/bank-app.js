let balance = 1000;

function startApp () {

  let choiceSmall;

  while (choiceSmall !== 'q') {

    let choice = prompt('What would you like to do? Enter:\nW to withdraw\nD to deposit\nB to see balance\nQ to quit');

    choiceSmall = choice.toLowerCase();

    switch (choiceSmall) {
      case 'q':
        break;
      case 'w':
        getWithdraw ();
        break;
      case 'd':
        getDeposit ();
        break;
      case 'b':
        getBalance ();
        break;
      default:
        alert("That is not a valid entery. Click 'OK' to see your options.");
        break;
    }
  }
}

function getWithdraw () {
  let withdraw = prompt('How much would you like to withdraw?');
  let withdrawAmount = Number(withdraw);
  if (withdrawAmount < 0) {
    alert('The amount you enter must be greater than zero');
  } else if (withdrawAmount > balance) {
    alert("Your withdrawal request exceeds your account balance. Click 'OK' to return to the main menu.");
  } else if ((balance - withdrawAmount) < 300) {
    let lowBalance = balance - withdrawAmount;
    let lowPrompt = prompt("Low balance alert! \nIf you withdraw, your remaining balance will be: " + lowBalance + ". \nType 'yes' to continue with this withdrawal or click 'OK' to return to the main menu.");
    let lowPromptSmall = lowPrompt.toLowerCase();
    if (lowPromptSmall === 'yes') {
      balance -= withdrawAmount;
    }
  } else {
    balance -= withdrawAmount;
    alert('Your account balance is: ' + balance);
  }
}

function getDeposit () {
  let deposit = prompt('How much would you like to deposit?');
  let depositAmount = Number(deposit);
  if (depositAmount < 0) {
    alert('The amount you enter must be greater than zero');
  } else if (depositAmount > 50000) {
    alert('The deposit amount must be less than $50,000. Please enter a smaller amount.')
  } else {
    balance += depositAmount;
    alert('Your account balance is: ' + balance);
  }
}

function getBalance() {
  alert('You current balance is: ' + balance);
}
