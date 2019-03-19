
const form = document.createElement('form');
const fields = ['First Name', 'Last Name', 'Email Address', 'Comments'];

document.body.appendChild(form);

// let form = document.querySelector('');

// console.log(form);


for (let i = 0; i <  fields.lenght >= 1; i += 1) {
     
const inputValue = document.createElement('input');
inputValue.setAttribute('id', fields[i]);

const label = document.createElement('label');
label.setAttribute('for', field[i]);

form.appendChild(inputValue);
form.appendChild(label);

     }

// let formElement = document.quearySelector('form'); 
// console.log(formElement); 

// formElement.addEventListener('submit', function(e) {
//  e.preventDefault();
//   const inputValue = formElement.elements[0].value
//   const dogName = formElement.elements[1].value 
  
  // u can put name and dog in ' ' it's personal preference though. 
  
  const dataToSubmit = document.createElement('button');
  dataToSubmit.setAttribute('type', 'submit');
  dataToSubmit.textContent = 'submit';

  form.appendChild(dataToSubmit);

   
// do code & alert 

form.addEventListener('submit', function(e) {
e.preventDefault();
alert('Your submission has been received. Thank you!');

console.log('form submitted')
console.log(form);
  
}; 