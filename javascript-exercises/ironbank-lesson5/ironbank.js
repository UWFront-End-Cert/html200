let quit = false;
let total = 1000;

while(quit === false) {
  let input = prompt('What would you like to do? Enter W to withdraw, enter D to deposit, enter B for balance, enter Q to quit');

  if (input.toUpperCase() === 'Q') {
    quit = true;
  }
  else if (input.toUpperCase() === 'W') {
    let withdraw = prompt('How much would you like to withdraw?');
    alert('You now have ' + (total -withdraw) + ' gold coins');
    total = total - Number(withdraw);
  }
  else if (input.toUpperCase() === 'D') {
    let deposit = prompt('How much would you like to deposit?');
    alert('You now have ' + (total + Number(deposit)) + ' gold coins');
    total = total + Number(deposit);
  }
  else if (input.toUpperCase() === 'B') {
    alert('Your total number of gold coins is: ' +  total);
  }
  else {
    alert('That is not a valid command');
  }
}
