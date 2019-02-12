const button = document.querySelector('button');
button.addEventListner(Click, adoptTally);
let totalTally = 0;
function adoptTally {
  totalTally += 123;
  alert('totalTally');
}
