//Online Banking 
// list of 4 actions - Q , W , B , D
// program loop 
// While Switch Case: Case 1 Case 2 ....


function OnlineBank() {
  let bank = prompt ('Q to quit, W to withdraw, D to deposit, B to view balance');

  let balance = 1200;
  let deposit = 0;
  let withdraw  = 0;

  while (bank === 'Q' && bank === 'q') {
    switch (bank)  {
      case 'b':
      case 'B':
        alert('Hello! Your balance is:' + balance);
          bank = prompt ('Q to quit, W to withdraw, D to deposit, B to view balance');
           break;
        case 'W':
        case 'w':
         alert('Withdrawal Amount is:' + withdraw);
          bank = prompt ('Q to quit, W to withdraw, D to deposit, B to view balance');
          break;
            case 'd':
            case 'D':
              alert('Deposit Amount is:' + deposit);
                bank = prompt ('Q to quit, W to withdraw, D to deposit, B to view balance');
                break;
                default:
                  bank = prompt ('Q to quit, W to withdraw, D to deposit, B to view balance');
    }
  }

}

OnlineBank();