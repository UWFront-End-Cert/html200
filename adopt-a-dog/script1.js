function clickMurphy(){
  let dogName = 'Murphy';
  let dogBreed = 'Lab';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

function clickPoppy(){
  let dogName = 'Poppy';
  let dogBreed = 'Maltese';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

function clickJack(){
  let dogName = 'Jack';
  let dogBreed = 'Jack Russell Terrier';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

function clickDuffy(){
  let dogName = 'Duffy';
  let dogBreed = 'Pitbull';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

function clickLucas(){
  let dogName = 'Lucas';
  let dogBreed = 'Lab';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

function clickJake(){
  let dogName = 'Jake';
  let dogBreed = 'Lab';
  let adoptFee= '$123.45';

  alert('Dog name: '+dogName+', Dog breed: '+dogBreed+', Adoption cost: '+adoptFee)
}

//total is an outer variable
let total = 0;
function runningTotal() {
   total = total + 123.45;
   alert('total cost ($): '+total);
};

let dogs = [
dog1 ={name:'Murphy', breed: 'Lab', price: 123.45, pic:'images/alex-lacayo-756508-unsplash.jpg'}
,dog2={name:'Poppy', breed: 'Maltese', price: 123.45, pic:'images/nikolay-tchaouchev-785309-unsplash.jpg'},
,dog3={name:'Jack', breed: 'Jack Russell', price: 123.45, pic:'images/marcus-wallis-471438-unsplash.jpg'}
,dog4={name:'Duffy', breed: 'Pitbull', price: 123.45, pic:'images/duffy-brook-350225-unsplash.jpg'}
,dog5={name:'Lucas', breed: 'Lab', price: 123.45, pic:'images/tucker-good-589776-unsplash.jpg'}
,dog6={name:'Jake', breed: 'Lab', price: 123.45, pic:'images/mitchell-orr-237216-unsplash.jpg'}
];


console.log(dogs[0].name)
console.log(dogs.length)
