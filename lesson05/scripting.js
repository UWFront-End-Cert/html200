let balance = 10000;

function displayName() {
    let name = document.getElementById("userName").value

    document.getElementById("nameLable").innerText = "Welcome " + name.toUpperCase() ;
    document.getElementById("balanceLable").innerText = "Your Current Balance is $" +  balance;
    document.getElementById("balanceLable").style.visibility = "visible";
    document.getElementById("nameLable").style.visibility = "visible";
    document.getElementById("nameform").style.visibility = "hidden";

    setTimeout(displaymenu, 1000);
}

function hidelabel() {
     document.getElementById("nameLable").style.visibility = "hidden";
     document.getElementById("balanceLable").style.visibility = "hidden";
}

function displaymenu() {
      let amount;
      let option = prompt ("ONLINE Service \n Please select any one option \n Q  to Quit \n W to Withdraw \n D to Deposit \n B to View Bank-balance");

      while (option.toUpperCase() !== 'Q'  ) {
          switch (option.toUpperCase()) {
            case 'W' :
              amount = prompt ("Enter Amount to Withdraw :");
              balance = balance - amount;
              if (balance < 0) {
                  alert ('Unable to process your request, due to Low Balance..!');
                  balance = Number(balance) + Number(amount);
              } else if (balance <= 300) {
                  let ans = prompt ("Your balance will be Low, after this transaction. \n Do you want to Continue (Y for Yes and N for No)?")
                  if (ans.toUpperCase() === 'N') {
                      balance = Number(balance) + Number(amount);
                  }
              }
              break;
            case 'D' :
              amount = prompt ("Enter Amount to Deposit :");
              balance = Number(balance) + Number(amount);
              if (balance > 50000) {
                  alert ('Unable to process your request, balance will exceed deposit cap of $50,000');
                  balance = balance - amount;
              }
              break;
            case 'B' :
              alert ('Your Current Balance is $' + balance);
              break;
            default:
              alert ('Please select correct option...! ');
              break;
          }

          option = prompt ("ONLINE Service \n Please select any one option \n Q  to Quit \n W to Withdraw \n D to Deposit \n B to View Bank-balance");
      }

      alert ('Thanks for Using our Banking Service...!')
      document.getElementById("balanceLable").innerText = "Your Current Balance is $" +  balance;
}
