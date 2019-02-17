let balance = 1000;

function startApp () {

  let choiceSmall;

  while (choiceSmall != 'q') {

    let choice = prompt('What would you like to do? Enter:\nW to withdraw\nD to deposit\nB to see balance\nQ to quit');  // Prompt the options Q/W/D/B

    choiceSmall = choice.toLowerCase();

    switch (choiceSmall) {
      case 'q':
        break;
      case 'w':
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
            balance = balance - withdrawAmount;
          }
        } else {
          balance = balance - withdrawAmount;
          alert('Your account balance is: ' + balance);
        }
        break;
      case 'd':
        let deposit = prompt('How much would you like to deposit?');
        let depositAmount = Number(deposit);
        if (depositAmount < 0) {
          alert('The amount you enter must be greater than zero');
        } else if (depositAmount > 50000) {
          alert('The deposit amount must be less than $50,000. Please enter a smaller amount.')
        } else {
          balance = balance + depositAmount;
          alert('Your account balance is: ' + balance);
        }
        break;
      case 'b':
        alert('You current balance is: ' + balance);
        break;
      default:
        alert("That is not a valid entery. Click 'OK' to see your options.");
        break;
    }
  }
}
