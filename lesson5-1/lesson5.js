// Online Banking 
// list of 4 actions - Q , W , B , D
// program loop 
// While Switch Case: Case 1 Case 2 ....


function OnlineBank() {
  let bank = prompt("Q to quit, W to withdraw, D to deposit, B to view balance");

  let balance = 1200;
  let deposit = 0;
  let withdraw = 0;

  while (bank === "Q" && bank === "q") {
    switch (bank)  {
      case "b":
      case "B":
      // b & B for Balance 
        alert("Hello! Your balance is:" + balance);
          bank();
           break;
        case "W":
        case "w":
        // w and W for withdrawl
         alert("Withdrawal Amount is:" + withdraw);
         bank();
          break;
            case "d":
            case "D":
            // d and D for deposit 
              alert("Deposit Amount is:" + deposit);
              bank();
                break;
                default:
                bank();
    }
  }

}

