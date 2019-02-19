function bankingOperations() {
  let quit = false;
  let startingBalance = 1000;

  while (quit === false) {
    let input = prompt('Enter Q to quit, W to make a withdrawal, D to deposit, and B to check your balance.');

    if (input === 'Q' || input === 'q') {
      quit = true;
    } else if (input === 'W' || input === 'w') {
      let withdrawal = prompt('How much would you like to withdraw?');
      let result = startingBalance - withdrawal;
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
      let deposit = prompt('How much would you like to deposit?');
      if (deposit >= 50000) {
        alert('Deposits must be less than $50,000.');
      }
    } else if (input === 'B' || input === 'b') {
      alert(startingBalance);
    }
  }
}
