function bank() {
  let input = prompt('Enter Q to quit \nEnter W to withdraw \nEnter D to deposit \nEnter B to view balance');
  switch (input) {
    // quit program
    case 'Q': {
      return;
    }
    // withdraw $
    case 'W': {
      let withdraw = Number(prompt('Enter the amount you would like to withdraw'));
      alert('You withdrew $' + withdraw);
      break;
    }
    // deposit $
    case 'D': {
      let deposit = Number(prompt('Enter the amount you would like to deposit'));
      alert('You deposited $' + deposit);
      break;
    }
    // view balance
    case 'B': {
      let balance = 0;
      let newBalance = balance - withdraw + deposit;
      alert('Your balance is $' + newBalance);
      break;
    }
  }
}




      // make deposit
      // case 'D': {
      //       alert('Enter the amount you would like to deposit.');
      //       break;
      // }
      // view balance
      // case 'B': {
      //       alert('Your balance is $' + newBalance);
      // }




//       } else if (input === W) {
//         // withdraw $$
//         let money = prompt('Enter the amount you would like to withdraw.');
//         return withdraw(money);
//       }  else if (input === D) {
//        // make deposit
//        let moola = prompt('Enter the amount you would like to deposit.')
//        return deposit(moola);
//      } else if (input === B) {
//        // view balance
//        alert('Your balance is $' + newBalance);
//      }
//   }
//
//   function withdraw(money) {
//     let balance = 0;
//     newBalance = balance - Number(money);
//     alert('You withdrew $' + money + 'and have $' + newBalance ' left.');
//   }
//
//   function deposit(moola) {
//     newBalance = Number(moola) + balance;
//     alert('You deposited $' + money + 'and now have $' + newBalance);
//   }
//
//   return account;
