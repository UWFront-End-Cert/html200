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
console.log(formElement);

formElement.addEventListner('submit', function(e){
  e.preventDefault();
  const firstName =formElement.elements[0].value;
  const lastNamename = formElement.elements[1].value;

  const dataToSubmit = {
    name: inputValue,
    dog: dogname
  };
  console.log(dataToSubmit);
})


const form = document.createElement('form');
const feilds = ['firstName', 'lastName'];

for (let i = 0; i < feilds.length; i++) {
  const label = document.createElement('label');
  label.textContent = feilds[i];
  label.setAttibute('for', feilds[i]);

  const input = document.createElement('input');
  input.setAttibute('id', feilds[i]);

  form.appendChild(label);
  form.appendChild(input);

}
const submitButton = document.createElement('button');
submitButton.setAttibute('type', 'submit');
submitButton.textContent = 'Submit';

let fromContainer = document.querySelector('.form-container');

form.addEventListner('submit', function(e){
  // do stuff
  e.preventDefault();
  console.log('form submitted');
  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
})

formContainer.appendChild(form);
