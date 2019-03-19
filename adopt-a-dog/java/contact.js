const form  = document.createElement('form');
const fields = ['First name:', 'Last name:', 'Email address:', 'Comments:']

document.body.appendChild(form);

for (let i=0; i < fields.length >= 1; i += 1){

  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for', fields[i]);

  const input = document.createElement('input');
  input.setAttribute('id', fields[i]);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';


form.appendChild(submitButton);


form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your submission has been received');
  console.log('form submitted')
  console.log(form.elements);
});
