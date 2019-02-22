function bankingOperations() {
  let quit = false;
  let balance = 1000;

  while (quit === false) {
    let input = prompt('Enter Q to quit, W to make a withdrawal, D to deposit, and B to check your balance.');

    if (input === 'Q' || input === 'q') {
      quit = true;
    } else if (input === 'W' || input === 'w') {
      let withdrawal = prompt('How much would you like to withdraw?');
      let result = balance - withdrawal;
          if (result <= 100) {
            alert('Warning: This withdrawal will leave you with a low balance!');
          } else if(result <= 0) {
            try {
              alert('Insufficient funds. Please try again.')
            } catch(err) {
              alert('Insufficient funds. Please try again.')
              break;
            }
          }
      console.log(result);
    } else if (input === 'D' || input === 'd') {
        let depositAmount = prompt('How much would you like to deposit?');
        if (depositAmount >= 50000) {
        alert('Deposits must be less than $50,000.');
        balance += Number(depositAmount);
        }
        console.log(balance);
    } else if (input === 'B' || input === 'b') {
      alert(balance);
    }
  }
}
