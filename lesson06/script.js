let balance = 1000
let input = ''

while(input !== 'q'){
  input = prompt('welcome to the bank. you can press w to withdraw, d to deposit, b to check balance, and q to quit')
  switch (input) {
    case 'w':

        withdraw();

      break;


//run the bank loop

}
}

function withdraw(){
  const withdrawAmt =  prompt('how much would you like to withdraw');
  Number(withdrawAmt);
  if( isNaN(withdrawAmt)){
    alert('')
  }
  balance -= withdrawAmt
}
