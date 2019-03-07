// Link JavaScript to your site.
// Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
// You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
// Create click handlers on each dog’s button that will add to the total.
// Alert this total.

//Dog's Information - Name, Breed and Price

// let dogName;
// let dogBreed;
// let dogDescr;
// let dogPrice = 123.45;
// let checkoutTotal = 0;

// // Checkout Total: adding the totals of each dog when button is clicked

// function dogAdd(click_id) {
//   checkoutTotal = dogPrice + checkoutTotal;
//   alert('Your total cost is' + '$' + checkoutTotal);
// }

//Alert - dog info hmmmmmmmmmmm :/

// function dogInfo() {
//   console.log()
//   alt = dogInfo;
//  alert(dogInfo);
// }


//'Name: ' + dogName + ' is ' + dogDescr + ' and ' + dogBreed + ' $ ' + dogPrice


let checkoutTotal =0;
const dog1 = 'Name: Murphy, Cost: $123.45, Breed: Lab';
const dog2 = 'Name: Poppy, Cost: $123.45, Breed: Havanese';
const dog3 = 'Name: Jack, Cost: $123.45, Breed: Lab';
const dog4 = 'Name: Duffy, Cost: $123.45, Breed: lab';
const dog5 = 'Name: Lucas, Cost: $123.45, Breed: Unknown';
const dog6 = 'Name: Jake, Cost: $123.45, Breed: Golden Retriever';
const dog7 = 'Name: Angus, Cost: $123.45, Bred: Lab';
const dog8 = 'Name: Violet, Cost: $123.45, Breed: Chihuahua';
const dog9 = 'Name: Piper, Cost: $123.45, Breed: Terrier';
const dog10 = 'Name: Maximus, Cost: $123.45, Breed: Lab';
const dog11 = 'Name: Luna, Cost: $123.45, Breed: Pitbull';
const dog12 = 'Name: Stella, Cost: $123.45 Breed: Beagle?';


// button click alert 

function dogAdd(click_id) {
  checkoutTotal = dogPrice + checkoutTotal;
  alert('Your total cost is' + '$' + checkoutTotal);
}

//Alert - dog info

function dogInfo(dog) {
  console.log(dog)
  // alt = dogInfo;
 alert(dog);
}

