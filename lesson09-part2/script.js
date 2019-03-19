
const form = document.createElement('form');
const fields = ['firstName', 'lastName'];

for (let i= 0; i < fields.length ; i++){
  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for',fields[i]);

  const input = document.createElement('input');
  input.setAttribute('id',fields[i]);

  form.appendChild(label);
  form.appendChild(input);


}


  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent ='submit';

  form.appendChild(submitButton);

  let formContainer = document.querySelector('.form-container');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submitted');
    console.log(document.getElementById('firstName').value);
  })

  formContainer.appendChild(form);
