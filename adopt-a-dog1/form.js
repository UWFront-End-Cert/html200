// function validateForm() {
//     let form = document.forms["myForm"].value;
//     if (form == "") {
//         alert("All boxes must be filled out");
//         return false;
//     }
// }



// const form = document.createElement('form');
// const fields = ['field1', 'field2'];

// for (let i = 0; i < fields.length; i += 1) {
//     const label = document.createElement('label');
//     label.textContent = fields[i];
//     label.setAttribute('for', fields[i]);

//     const input = document.createElement('input');
//     input.setAttribute('id', fields[i]);

//     form.appendChild(label);
//     form.appendChild(input);
// }




// const form = document.createElement('form');
// const fields = ['firstName', 'lastName'];

// for (let i = 0; i < fields.length; i += 1) {
//     const label = document.createElement('label');
//     label.textContent = fields[i];
//     label.setAttribute('for', fields[i]);

//     const input = document.createElement('input');
//     input.setAttribute('id', fields[i]);

//     form.appendChild(label);
//     form.appendChild(input);

//     const submitButton = document.createElement('button');
//     submitButton.setAttribute('type', 'submit');
//     submitButton.textContent = 'Submit';
    
// }




// const form =
// [
//     {
//         First Name: 'asdf',
//         Last Name: 'dfsa'
//     }
// ];

// let form1 = document.getElementById('form');

// form1.innerHTML = '<h1>New Text</h1>';
// form1.textContent = 'More Text';

// for (let i = 0; i <form.length; i++) {

// }






const form = document.createElement("form");
form.setAttribute('method',"post");
form.setAttribute('action',"submit.php");

const name = document.createElement("input");
name.setAttribute('type',"text");
name.setAttribute('name',"FirstName");
// form.textContent = 'First Name';

const namelast = document.createElement("input");
namelast.setAttribute('type',"text");
namelast.setAttribute('name',"LastName");
// form.textContent = '<h2>Last Name</h2>';

const email = document.createElement("input");
email.setAttribute('type',"text");
email.setAttribute('name',"LastName");
form.textContent = 'First Name, Last Name, Email, Comments';

const comment = document.createElement("textarea");
comment.setAttribute('type', "text");
comment.setAttribute('comment', "comments");

const s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

form.appendChild(name);
form.appendChild(namelast);
form.appendChild(email);
form.appendChild(comment);
form.appendChild(s);



document.getElementsByTagName('body')[0].appendChild(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Submitted');
    console.log(name +'name' + namelast + email);
})



// let formula = document.querySelector('form');

