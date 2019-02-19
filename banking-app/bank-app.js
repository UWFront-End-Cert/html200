prompt ('Please choose your action. Type B to see your balance. Type W to make a withdrawal. Type D to make a deposit. Type Q to quit.');

let startingBalance = 1000;

  const B = 'balance';
  const W = 'withdrawal';
  const D = 'deposit';
  const Q = 'quit';

function startBank () {

      while(quit === false) {
        if (input === 'Q'); {
          else if (input === 'B'); {
          else if (input === 'D'); {
          else if (input === 'W');
          }

      switch (startingBalance) {
        case (Q) :
          quit = alert ('Have a nice day!')
            break;
        case (B) :
          balanceNum = alert ('Your current balance.');
            break;
        case (W) :
          withdrawalNum = prompt ('Please enter the amount you would like to withdraw?');
            function withdrawal () {
              withdrawalNum = Number(withdrawalNum);
              balance = balance - withdrawalNum;
            }
          withdrawalNum = Number;
            console.log(balance) = Number - withdrawalNum;
            break;
        case (D) :
          depositNum = prompt ('Please enter the amount you would like to deposit?');
          function deposit () {
            depositNum = Number(depositNum);
            balance = balance + depositNum;
            }
          depositNum = Number;
            console.log(balance) = Number + depositNum;
            break;
      }
}
