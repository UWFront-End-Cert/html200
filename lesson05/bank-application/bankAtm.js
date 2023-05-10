function myATM() {
    let text;
    let myOption = prompt('Choose an option: ', 'W = Make Withdrawl | B = View Balance | D = Make Deposit | Q = Exit');

    switch(myOption) {
      case 'w':
        text = 'You want to make a withdrawl';
        break;
      case 'B':
        text = 'You want to view your balance';
        break;
      case 'D':
        text = 'You wish to make a deposit';
        break;
      default:
        text = "Thank you for using our ATM.";
    }
    document.getElementById("demo").innerHTML = text;
}