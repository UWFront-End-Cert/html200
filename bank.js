let currentBalance = 25.50;

function bankPrompt() {
    
  let guestInput = prompt("Your account balance is currently: $" + currentBalance + ". You can withdraw by entering W, deposit by entering D, check your balance by entering B, or quit this session by entering Q.");

switch (guestInput) {
    case 'q':
    case 'Q': {
    alert('You have ended this banking session. Goodbye');
    break;
    }
        
    case 'b':
    case 'B': {
    alert('Your current balance is $' + currentBalance);
    bankPrompt();
    return; 
    }
      
    case 'd':
    case 'D': {
    let dwInput = prompt("Enter the amount to be deposited: ");
    currentBalance = Number(currentBalance) + Number(dwInput);
    bankPrompt();
    return;
    }
        
    case 'w':
    case 'W': {
    let dwInput = prompt("Enter the amount to be withdrawn: ");
    currentBalance = currentBalance - dwInput;
    bankPrompt();
    return;
    }
        
  default: {
    alert("This session has ended. Thank you for banking with us today.");
      bankPrompt();
      return;
  }
}
}

bankPrompt();