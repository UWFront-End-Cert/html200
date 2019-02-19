function banks() {
    let bank = prompt('Q to quit, W to withdraw, D to deposit, B to view balance');
    let withdraw = 0;
    let deposit = 0;

    if (bank === 'Q') {
        console.log('break');
    } else if (bank === 'W') {
        let withdraw = prompt('Withdrawal Amount:');
        banks ();
    } else if (bank === 'D') {
        let deposit = prompt('Deposit Amount:');
        banks ();
    } else if (bank === 'B') {
        // alert('$' + 69999999 - withdraw + deposit);
        alert('$69,999,999');
        banks();
    } else {
        banks();
    }
}

banks();