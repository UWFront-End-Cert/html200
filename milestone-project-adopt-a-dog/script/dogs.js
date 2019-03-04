dog1 = {
  name: 'Murphy',
  breed: 'Beagle',
  cost: 123.45
}

dog2 = {
  name: 'Poppy',
  breed: 'Shih Tzu',
  cost: 123.45
}

dog3 = {
  name: 'Jack',
  breed: 'Beagle',
  cost: 123.45
}

dog4 = {
  name: 'Duffy',
  breed: 'Pit Bull Terrier',
  cost: 123.45
}

dog5 = {
  name: 'Lucas',
  breed: 'Beauceron',
  cost: 123.45
}

dog6 = {
  name: 'Jake',
  breed: 'Labrador Retriever',
  cost: 123.45
}

dog7 = {
  name: 'Angus',
  breed: 'Boxer',
  cost: 123.45
}

dog8 = {
  name: 'Violet',
  breed: 'Labrador Retriever',
  cost: 123.45
}

dog9 = {
  name: 'Piper',
  breed: 'Nova Scotia Duck Tolling Retriever',
  cost: 123.45
}

dog10 = {
  name: 'Maximus',
  breed: 'schnauzer',
  cost: 123.45
}

dog11 = {
  name: 'Luna',
  breed: 'Labrador Retriever',
  cost: 123.45
}

dog12 = {
  name: 'Stella',
  breed: 'Chihuahua',
  cost: 123.45
}


function dogInfo(dog) {
  alert("Name: " + dog.name + "\nBreed: " + dog.breed + "\nAdoption Fees: " + dog.cost);
}

function calculateTotal() {
  let fees = 123.45;
  let prevValue = document.getElementById("total-cost").innerHTML;
  cartTotal =  parseInt(prevValue, 10) + fees;
  alert("Total: " + cartTotal);
  document.getElementById("total-cost").innerHTML = cartTotal;
}
