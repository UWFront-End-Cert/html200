// starting balance is $1000
let startingBalance = 1000;
let balance = "Balance"
let quit = false;
// account for upper and lower case
// let withdrawl = withdrawl.toUpperCase('W');
// let deposit = deposit.toUpperCase('D');
// let balance = balance.toUpperCase('B');
// let quit = quit.toUpperCase('Q');
// an alert allowing them to enter in Q, W, D, B
prompt ('Welcome to the Banking Calculator.  Type in B to see your balance. Type in W to make a withdrawl. Type in D to make a deposit. And type in Q to quit.')

const B = 'balance';
let b = balance.toUpperCase('B');
const W = 'withdrawl';
let w = withdrawl.toUpperCase('W');
const D = 'deposit';
let d = deposit.toUpperCase('D');
const Q = 'quit';
let q = quit.toUpperCase('Q');

function withdraw(){
  withdrawAmt = prompt('How much would you like to withdraw?')
  withdrawAmt = Number(withdrawAmt)
  balance = balance - withdrawAmt
}

function bankingTotal (); {
  switch (withdrawlAmount) {
    case (W):
    withdrawlAmount = prompt ('How much would you like to withdraw from your account?');
    withdrawlAmount = Number
    console.log(balance) = Number - withdrawlAmount;
      break;
    default:
    console.log('Please enter a withdrawl amount');
    break;
    case (D):
    depositAmount = prompt ('How much would you like to deposit into your account?');
    depositAmount = Number
    console.log(balance) = Number + depositAmount;
      break;
    default:
    console.log('Please enter a deposit amount');
    break;
    case (B):
    balanceAmount = alert ('Here is your balance:');
      break;
    case (Q):
    quit = alert ('Thank you for banking with us!')
  }
    try {
      console.log('You entered in a incorrect key command, try again');
    } catch (error) {
      console.log ('You entered in a incorrect key command, try again');
    } finally {
      console.log('You entered in a incorrect key command, try again');
    }
    while(quit === false) {
      if (input === 'Q') {
      } else if (input === 'B') {
        else if (input === 'D') {
        else if (input === 'W')
        }
}
