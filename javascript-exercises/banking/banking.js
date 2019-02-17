let quit = false;

let total = 1000;

function welcome () {
  let input = prompt('What would you like to do? Enter W to withdraw, enter D to deposit, enter B for balance, enter Q to quit');
 while (quit === false) {
  switch (input.toUpperCase()) {
    case 'W':
      let withdraw = prompt('How much   would you like to withdraw');
      alert(total - Number(withdraw));
      welcome();
      break;
    case 'D':
      let deposit = prompt('How much    would you like to deposit?');
      alert(total + Number(deposit));
      welcome();
      break;
    case 'B':
      alert('Your balance is: ' +  total);
      welcome();
    case 'Q':
      let quit = true;
  }
  }
}
