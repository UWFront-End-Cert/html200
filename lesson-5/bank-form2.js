console.log('hi');

let input = '';
let balance = 1000;

while (input !== 'q') {
    // let balance = 1000;
    input = prompt('Welcome to Steves Bank. Enter Q to quit. W to withdrawl. D for deposit. B for balance.');

  switch (input) {
      case 'd':
        console.log('you entered deposit');
        deposit() =
        break;
      case 'w':
          console.log('you entered withdrawl');
          withdrawl()
          break;
      case 'd':
          console.log('you entered deposit');
          break;
      case 'q':
          console.log('you entered quit');
          break;
      default:
        console.log ('You entered an incorrect value');
        break;
    }

  function deposit (depositAmount) {
    const depositAmount = prompt ('Enter your deposit amount')
    balance +== Number(depositAmount);
    alert(balance);
  }
    function withdrawl (withdrawlAmount) {
      const withdrawlAmount = prompt ('Enter your withdrawl amount')
      balance -== Number(withdrawlAmount);
      alert(balance);
  }

}
