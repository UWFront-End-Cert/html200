const fields = [
    {
        name: 'name',
        label: 'Name',
        id: '#name'
    },
    {
        name: 'address',
        label: 'Address',
        id: '#address'
    },
    {
        name: 'city',
        label: 'City',
        id: '#city'
    },
    {
        name: 'state',
        label: 'State',
        id: '#state'
    },
    {
        name: 'zip',
        label: 'Zip',
        id: '#zip'
    },
    {
        name: 'ownerlevel',
        label: 'First Time Adopter?',
        id: '#ownerlevel'
    },
    {
        name: 'pickuplocation',
        label: 'Pickup Location',
        id: '#pickuplocation'
    },
]

const dogform = document.createElement('form');

const checkoutTitle = document.createElement('h1');
checkoutTitle.textContent = 'Checkout';

let checkoutForm = document.querySelector('.checkout');
checkoutForm.appendChild(checkoutTitle);
checkoutForm.appendChild(dogform);


for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', 'field.name');

    const input = document.createElement('input');
    input.setAttribute('id', 'field.name');

    dogform.appendChild(label);
    dogform.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
dogform.appendChild(submitButton);

dogform.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you. The form information has been received.")
});

let total = 0;

function dogTotalCost(cost) {
    total = total + Number(cost);
    $('#total').text('$ ' + Number(total));
}