function dogInfo(name, breed, cost) {
alert('Name: ' + name + ', ' + 'Breed: ' + breed + ', ' + 'Cost: ' + '$' + cost);
}

function dogCost(cost) {
  alert('The total is: ' + '$' + cost);
}



// Attempt at running total. Will log accumulating total when given
// values in js, but does not work when I call the function and assign value in html
// let total = 0;
//
//   function adoptionFee(cost) {
//     total = total + cost;
//     return total;
//   }
//
//   adoptionFee(5);
//   adoptionFee(5);
//   console.log(total);
