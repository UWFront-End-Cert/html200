

// Title for Form Layout 

const title = document.createElement('h3');
title.setAttribute('class', 'form-title');
title.textContent = 'Contact Us';
document.querySelector('article').appendChild(title);

// Form layout 

const form = document.createElement('form');
form.setAttribute('class', 'Contact-form');
form.setAttribute('method', 'get');
document.querySelector('article').appendChild(form);


// Form Content 

// var formElement = document.createElement('form');
// formElement.setAttribute('method','post');
// formElement.setAttribute('action','login.php');

const mainField = document.createElement('fieldset');
mainField.setAttribute('class', 'mainField');
document.querySelector('article').appendChild(mainField);

// main Field content 

const mainFields = ['Name' , 'Email Address', 'Comments']; 

for (let i = 0; i  < mainFields.length; i++) {
  const label = document.createElement('label');
  label.textContent = mainFields[i];
  label.setAttribute('for', mainFields[i]);
  
  const input = document.createElement('input');
  input.setAttribute('id', mainFields[i]);
  
  mainField.appendChild(label);
  mainField.appendChild(input);
}


// Button 

const submitBut = document.createElement('button');
  submitBut.setAttribute('type', 'submit');
  submitBut.setAttribute('class', 'submit');
  submitBut.setAttribute('onclick', 'submission()');
  submitBut.textContent = 'submit'

  form.appendChild(submitBut);
  


  let formElement = document.querySelector('form');

  formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your submission has been received, Thank You!");

    const name = formElement.elements[1].value;
    const email = formElement.elements[2].value;
    const comment = formElement.elements[3].value;

    const DataToSubmit = {
      'Name': name,
      'Email adress': email,
      'Comments' : comment,
    };

    console.log(DataToSubmit);

  });


  /// OLD JS CODE AND MESSING AROUND

// document.createElement('input');
// firstNameField.setAttribute('type','text');
// firstNameField.setAttribute('name','firstName');

// var lastNameField = document.createElement('input');
// lastNameField.setAttribute('type','text');
// lastNameField.setAttribute('name','lastName');

// email address field and content

// const emailAddress = document.createElement('fieldset');
// emailAddress.setAttribute('class','user-email');
// document.querySelector('form').appendChild(emailAddress);

// const emailAdd = ['email'];
// for (let i = 0; i < emailAdd.length; i++) {
//   const label = document.createElement('label');
//   label.setAttribute('class', emailAdd[i]);
//   label.setAttribute('for', emailAdd[i]);

//   const input = document.createElement('input');
//   input.setAttribute('id', emailAdd[i]);
  
//   emailAddress.appendChild(label);
//   emailAddress.appendChild(input);
// }

// Last Section: Comments and Submit button

// const endField = document.createElement('fieldset');
// endField.setAttribute('class', 'last');
// document.querySelector('form').appendChild(endField);

  // const comments = document.createElement('label');
  // comments.textContent = 'Comments';
  // comments.setAttribute('class', 'comments');
  // comments.setAttribute('for', 'comments');

  // const input = document.createElement('input');
  // Response.setAttribute('id', Response[i]);

  // mainField.appendChild(comments);
  // mainField.appendChild(Response);




// var submitField = document.createElement('input'); 
// submitField.setAttribute('type','submit');
// submitField.setAttribute('value','Submit');

// formElement.appendChild(firstNameField);
// formElement.appendChild(lastNameField);
// formElement.appendChild(emailAddress);
// formElement.appendChild(submitField);

// document.body.insertBefore(formElement, document.body.childNodes[0]);


// // create form and fields 

// const form = document.createElement('form');
// const fields = ['First Name', 'Last Name', 'Email Address', 'Comments'];

// document.body.appendChild(form);

// // create input and label 


// for (let i = 0; i <  fields.length >= 1; i += 1) {
     
// const inputValue = document.createElement('input');
// inputValue.setAttribute('id', fields[i]);

// const label = document.createElement('label');
// label.setAttribute('for', fields[i]);

// form.appendChild(inputValue);
// form.appendChild(label);

// }

// /// create submti button 
  
//   const dataToSubmit = document.createElement('button');
//   dataToSubmit.setAttribute('type', 'submit');
//   dataToSubmit.textContent = 'submit';

//   form.appendChild(dataToSubmit);

//   let formElement = document.querySelector('form'); 

// // alert and console form 

// form.addEventListener('submit', function(e) {
// e.preventDefault();
// alert('Your submission has been received. Thank you!');

//     const FirstName = formElement.elements[1].value;
//     const LastName = formElement.elements[2].value;
//     const email = formElement.elements[3].value;
//     const comment = formElement.elements[4].value;

//     const formData = {
//       'First Name': name,
//       'Last Name': name,
//       'Email address': email,
//       'Comment' : comment,

//     };

// console.log('form submitted');
// console.log(formData);


// }); 
