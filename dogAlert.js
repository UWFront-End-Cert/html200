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

// ======ADD blog-para======================================================

// const x = blog-para;

// for(let x = 0; x <blog-para.length; x++) {
//     console.log(blog-para);
// }

document.getElementsByClassName('blog-para')[0].innerHTML = 'Blog1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';
document.getElementsByClassName('blog-para')[1].innerHTML = 'Blog2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';
document.getElementsByClassName('blog-para')[2].innerHTML = 'Blog3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';

// ======ADD blog-header======================================================

document.getElementsByClassName('blog-header')[0].innerHTML = 'Travelling with your dogs';
document.getElementsByClassName('blog-header')[1].innerHTML = 'How to Walk Multiple Dogs';
document.getElementsByClassName('blog-header')[2].innerHTML = 'Teach Your Dogs to Fetch!';

// ======ADD blog-picture======================================================

document.getElementsByClassName('blog-picture')[0].src = 'images/patrick-hendry-221863-unsplash.jpg';
document.getElementsByClassName('blog-picture')[1].src = 'images/matt-nelson-259365-unsplash.jpg';
document.getElementsByClassName('blog-picture')[2].src = 'images/wyatt-ryan-367017-unsplash.jpg';
