let balance = 123.45;

function run() {
  let options = prompt("Please type your selection: \n Q-Quit \n W-Withdraw \n D-Deposit \n B-Balance").toUpperCase();

switch(options) {
  case "Q":
    console.log('quit');
    break;
  case "W":
    console.log('withdraw');
    prompt("Enter amount to withdraw:");
    run();
    return;
  case "D":
    console.log('deposit');
    prompt("Enter amount to deposit:");
    run()
    return;
  case "B":
    console.log('balance');
    alert(balance);
    run()
    return;
  default:
    alert("Please try again.");
    run();
    return;
}
}

//NOTES
//get user input then,
//Q to quit
//W to withdraw
// -- new input: amount to withdraw
// -- after withdrawal, prompt user: select new option
//D to deposit
// -- new input: amount to deposit
// -- after deposit, prompt user: select a new option
//B to view balance
// -- alert balance
// -- after balance, prompt user: select a new option
