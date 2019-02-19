function dogInformation(name, breed, fee) {
  alert('This is ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + fee);
}

let totalAdoptionFees = 0;

function calcTotal(fee) {
  totalAdoptionFees += fee;
  alert('Total adoption fees: ' + totalAdoptionFees);
}



// var allButtons = document.querySelector('button');
//
// for (var i = 0; i < allButtons.length; i++) {
//   allButtons[i].onclick = calcTotal;
// }
//
//
//
// allButtons.onclick = calcTotal;






// function cartTotal(fee) {
//   // feeNumber = Number(fee);
//   let total = 0;
//   let total = total + fee;
//   return total;
//   alert('Total adoption fees: ' + total);
// }
//
// console.log(total);
