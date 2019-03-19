const form = document.createElement('form');
const fields = ['*First Name: ', '*Last Name: '];

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for', fields[i]);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');

  const lineBreak = document.createElement('br');

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(lineBreak);
}

// for email
const emailLabel = document.createElement('label');
emailLabel.textContent = '*E-mail: ';
emailLabel.setAttribute('for', 'email');
form.appendChild(emailLabel);

const input = document.createElement('input');
input.setAttribute('type', 'email');
form.appendChild(input);

const emailBreak = document.createElement('br');
form.appendChild(emailBreak);

//for message
const label = document.createElement('label');
label.textContent = '*Message: ';
label.setAttribute('for', 'message');
form.appendChild(label);

const textArea = document.createElement('textArea');
textArea.setAttribute('type', 'textArea');
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
  alert("Your submission has been received!" + "\n"
  + "\nFirst Name: " + form.elements[0].value + "\nLast Name: "
  + form.elements[1].value + "\nE-mail: " + form.elements[2].value
  + "\nMessage: " + form.elements[3].value);
  location.reload();
});

formContainer.appendChild(form);
