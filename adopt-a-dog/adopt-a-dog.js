// Link JavaScript to your site.
// Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
// You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
// Create click handlers on each dog’s button that will add to the total.
// Alert this total.

//Dog's Information - Name, Breed and Price

let dogName;
let dogBreed;
let dogDescr;
let dogPrice = 123.45;
let checkoutTotal = 0;

// Checkout Total - dogAdd

function dogAdd(click_id) {
  checkoutTotal = dogPrice + checkoutTotal;
  alert("Your total cost is " + '$' + checkoutTotal);
}



//Alert - dog info 

// alert('Name: ' + dogName + ' is ' + dogDescr + ' and ' + dogBreed + ' $ ' + dogPrice );
