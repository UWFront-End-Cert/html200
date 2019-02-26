let totalAdoptionFees =0;
const dog1 = 'Name: Murphy, cost: 123, breed: lab';
const dog2 = 'Name: Poppy, cost: 123, breed: collie';
const dog3 = 'Name: Jack, cost: 123, breed: terrier';
const dog4 = 'Name: Duffy, cost: 123, breed: lab';
const dog5 = 'Name: Lucas, cost: 123, breed: collie';
const dog6 = 'Name: Jake, cost: 123, breed: terrier';
const dog7 = 'Name: Angus, cost: 123, breed: lab';
const dog8 = 'Name: Violet, cost: 123, breed: collie';
const dog9 = 'Name: Piper, cost: 123, breed: terrier';
const dog10 = 'Name: Poppy, cost: 123, breed: lab';
const dog11 = 'Name: Jake, cost: 123, breed: collie';
const dog12 = 'Name: Duffy, cost: 123, breed: terrier';

function adoptThisDog(adoptionFees) {
    totalAdoptionFees += adoptionFees;
    console.log(totalAdoptionFees); 
}

function showDogInfo(dog) {
    console.log(dog);
    alert(dog);
}
