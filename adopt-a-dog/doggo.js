// const blogPosts = [
//   {
//     headline: 'Thing about a thing',
//     body: 'some words'
//   },
//   {
//     headline: 'Another blog post',
//     body: 'more words'
//   },
// ]
//
// console.log(blogPosts[0].headline);
//
// let blogPost = document.querySelector('article');
//
// console.log(blogPost);
//
// blogPost.innerHTML = '<h2>' + blogPosts[0].headline + '</h2><p>' + blogPosts[0].body + '</p>'
//
// for (let i=0; i < blogPosts.length; i++) {
//
// }

const blogPosts = [
  {
    image: 'images/marcus-wallis-471438.jpg',
    alt: 'Beagle begging for food',
    headline: 'Travelling with your dog',
    blogText: 'Blog is a blog of blogs'
  },
  {
    image: 'images/marcus-wallis-471438.jpg',
    alt: 'Beagle begging for food-2',
    headline: 'Travelling with your dog-2',
    blogText: 'Blog is a blog of blogs-2'
  }
]

const blogPostContainer = document.querySelector('.blog-post-container');

console.log(blogPostContainer);

for(let i = 0; i < blogPosts.length; i++){
  blogPost.innerHTML = '<h1>' + blogPosts[i].headline + '</h1>';
  blogPostContainer.appendChild(blogPost);
}
let blogPost =  document.createElement('article');



let formElement = document.querySelector('form');
console.log(formElement);

formElement.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputValue = formElement.elements[0].value;
  const dogName = formElement.elements[1].value;

  const dataToSubmit = {
    name: inputValue;
    dog: dogName;
  }

  console.log('this form has been submitted');
})

function clickOnMurphy(){
  let dogName = 'Murphy';
  let dogBreed = 'Mix';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnPoppy(){
  let dogName = 'Poppy';
  let dogBreed = 'Shih Tzu';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnJack(){
  let dogName = 'Jack';
  let dogBreed = 'Beagle';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnDuffy(){
  let dogName = 'Duffy';
  let dogBreed = 'Pitbull';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnLucas(){
  let dogName = 'Lucas';
  let dogBreed = 'Labrador';
  let adoptionFee = '$123.45';

  alert('Dog Name: '+ dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnJake(){
  let dogName = 'Jake';
  let dogBreed = 'Lab';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnAngus(){
  let dogName = 'Angus';
  let dogBreed = 'Pug Mix';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

function clickOnViolet(){
  let dogName = 'Violet';
  let dogBreed = 'Chocolate Labrador';
  let adoptionFee = '$123.45';

  alert('Dog Name: ' + dogName + ', Dog Breed: ' + dogBreed + ', Adoption Cost: ' + adoptionFee)
}

let totalCost = 0;
function addTotal() {
   totalCost = totalCost + 123.45;
   alert('Total adoption Cost (USD): ' + totalCost);
}
