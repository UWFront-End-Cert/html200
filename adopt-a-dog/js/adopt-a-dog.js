// const button = document.querySelector('button');
// button.addEventListner(Click, adoptTally);
let totalTally = 0;
function adoptTally() {
  totalTally += 123;
  alert(totalTally);
}
function dogInfo() {
  let img = document.getElementsByClassName('dog-card')
  let alt = img.getAttribute("alt");
  alert(alt);
}
function submitSuccess() {
  alert('Information Successfully submitted');
}

let formElement = document.querySelector('fieldset');
// console.log(formElement);

// formElement.addEventListner('submit', function(e){
//   e.preventDefault();
//   const firstName =formElement.elements[0].value;
//   const lastNamename = formElement.elements[1].value;
//
//   const dataToSubmit = {
//     name: inputValue,
//     dog: dogname
//   };
//   console.log(dataToSubmit);
// })


const form = document.createElement('form');
const feilds = ['firstName', 'lastName'];

for (let i = 0; i < feilds.length; i++) {
  const label = document.createElement('label');
  label.textContent = feilds[i];
  label.setAttribute('for', feilds[i]);

  const input = document.createElement('input');
  input.setAttribute('id', feilds[i]);

  form.appendChild(label);
  form.appendChild(input);

}
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

let fromContainer = document.querySelector('.form-container');

// form.addEventListner('submit', function(e){
//   // do stuff
//   e.preventDefault();
//   console.log('form submitted');
//   console.log(form.elements[0].value);
//   console.log(form.elements[1].value);
// })

// formContainer.appendChild(form);


const blogPosts = [
  {
    image: 'images/matt-nelson-259365-unsplash.jpg',
    alt: 'Walking Dogs',
    headline: 'How to Walk multiple Dogs',
    blogText: 'Blog is a blog of blogs'
  }
]

const blogPostContainer = document.querySelector('.blog-card');

console.log(blogPostContainer);
let blogPost = document.createElement('article');
blogPost.innerHTML = '<h1>' + blogPosts[0].headline + '</h1>' + '<img src=' + blogPosts[0].image + ' alt=' + blogPosts[0].alt + '>' +  '<p>' + blogPosts[0].blogText
blogPostContainer.appendChild(blogPost);

$('.dog-card').hover(function(e){
  $('.dog-card').toggleClass('show');
});
