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




const form = document.createElement('form');
const fields = ['firstName', 'lastName'];

for (let i = 0; i < fields.length; i++) {
    const label = document.createElement('label');
    label.textContent = fields[1];
    label.setAttribute('for', fields[i]);

    const input = document.createElement('input');
    input.setAttribute('id', fields[1]);

    form.appendChild(label);
    form.appendChild(input);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    
}