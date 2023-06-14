const fields = [
    {
        name:'full-name',
        label:'Full Name'
    },
    {
        name:'email',
        label:'Email Address'
    },
    {
        name:'street',
        label:'Address'
    },
    {
        name:'city',
        label:'City'
    },
    {
        name:'state',
        label:'State'
    },
    {
        name:'zip',
        label:'Zip Code'
    },
    {
        name:'experience',
        label:'First Time Adopter?'
    },
    {
        name:'pickup',
        label:'Pickup Location'
    }
];

const form = document.createElement('form');
document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');
});