function adoptThisDog() {
  let adoptionFees = 123.45;
  let total = 0;
  total += adoptionFees;
  console.log(total);
}

const dog1 = 'Name: Murphy, cost $123.45, breed: unknown';
const dog2 = 'Name: Poppy, cost $123.45, breed: Shih tzu mix';
const dog3 = 'Name: Jack, cost $123.45, breed: beagle';
const dog4 = 'Name: Duffy, cost $123.45, breed: pitbull mix';
const dog5 = 'Name: Lucas, cost $123.45, breed: lab mix';
const dog6 = 'Name: Jake, cost $123.45, breed: labrador retriever';
const dog7 = 'Name: Angus, cost $123.45, breed: golden retriever';
const dog8 = 'Name: Violet, cost $123.45, breed: chihuahua';

// function showDogInfo(dog) {
//   alert(dog);
// }


$(document).ready(function(){
  $('img').click(function(e) {
    alert('Look at how cute I am! Adopt me today!');
  });
  $('.dog').hover(function(){
    $(this).css('background-color', 'lightgreen');
    }, function(){
    $(this).css('background-color', 'white');
  });
});
