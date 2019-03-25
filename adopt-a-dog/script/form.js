// const fields = ['*First Name: ', '*Last Name: '];
//
// for (let i = 0; i < fields.length; i++) {
//   const label = document.createElement('label');
//   label.textContent = fields[i];
//   label.setAttribute('for', fields[i]);
//
//   const input = document.createElement('input');
//   input.setAttribute('type', 'text');
//
//   const lineBreak = document.createElement('br');
//
//   form.appendChild(label);
//   form.appendChild(input);
//   form.appendChild(lineBreak);
// }
const form = document.createElement('form');

//for firstname (to get form data with jquery)
const label = document.createElement('label');
label.textContent = '*First Name: ';
label.setAttribute('for', 'firstName');
form.appendChild(label);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'firstName');
form.appendChild(input);

const firstNameBreak = document.createElement('br');
form.appendChild(firstNameBreak);

//for lastname (to get form data with jquery)
const label2 = document.createElement('label');
label2.textContent = '*Last Name: ';
label2.setAttribute('for', 'lastName');
form.appendChild(label2);

const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'lastName');
form.appendChild(input2);

const lastNameBreak = document.createElement('br');
form.appendChild(lastNameBreak);

// for email (to get form data with jquery)
const emailLabel = document.createElement('label');
emailLabel.textContent = '*E-mail: ';
emailLabel.setAttribute('for', 'email');
form.appendChild(emailLabel);

const input3 = document.createElement('input');
input3.setAttribute('type', 'email');
input3.setAttribute('id', 'email');
form.appendChild(input3);

const emailBreak = document.createElement('br');
form.appendChild(emailBreak);

//for message (to get form data with jquery)
const messageLabel = document.createElement('label');
messageLabel.textContent = '*Message: ';
messageLabel.setAttribute('for', 'message');
form.appendChild(messageLabel);

const textArea = document.createElement('textArea');
textArea.setAttribute('type', 'textArea');
textArea.setAttribute('id', 'textArea');
textArea.setAttribute('rows', '8');
textArea.setAttribute('column', '4');
form.appendChild(textArea);

const lineBreak = document.createElement('br');
form.appendChild(lineBreak);

let formContainer = document.querySelector('.form-container');

console.log(form);

form.elements[0].setAttribute("required", "true");
form.elements[1].setAttribute("required", "true");
form.elements[2].setAttribute("required", "true");
form.elements[3].setAttribute("required", "true");

// function ValidateEmail(mail)
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.elements[2].value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log ("Your submission has been received!" + "\nFirst Name: " + $("#firstName").val() + "\nLast Name: "
  + $("#lastName").val() + "\nE-mail: " + $("#email").val()
  + "\nMessage: " + $("#textArea").val());
  //location.reload();  
});

formContainer.appendChild(form);
