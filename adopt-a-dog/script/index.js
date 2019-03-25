dog1 = {
  name: 'Murphy',
  breed: 'Beagle',
  cost: 1000
}

dog2 = {
  name: 'Poppy',
  breed: 'Shih Tzu',
  cost: 1500
}

dog3 = {
  name: 'Jack',
  breed: 'Beagle',
  cost: 2000
}

dog4 = {
  name: 'Duffy',
  breed: 'Pit Bull Terrier',
  cost: 1800
}

dog5 = {
  name: 'Lucas',
  breed: 'Beauceron',
  cost: 1100
}

dog6 = {
  name: 'Jake',
  breed: 'Labrador Retriever',
  cost: 2100
}

// dog7 = {
//   name: 'Angus',
//   breed: 'Boxer',
//   cost: 123.45
// }
//
// dog8 = {
//   name: 'Violet',
//   breed: 'Labrador Retriever',
//   cost: 123.45
// }

$(function(){
  $(".dog-tile").hover(
  function() {
    $(this).css("border", "2px dashed rgb(9, 60, 96)");
  });
});


function dogInfo(dog) {
  alert("Name: " + dog.name + "\nBreed: " + dog.breed + "\nAdoption Fees: " + dog.cost);
}

function calculateTotal(dogFee) {
  let fees = dogFee.cost;
  let prevValue = $('#total-cost').html();
  cartTotal =  parseInt(prevValue, 10) + fees;
  alert("Total: " + cartTotal);
  $('#total-cost').html(cartTotal);
}
