let formElement = document.querySelector('form');


$('form').submit(function(e) {
  e.preventDefault();

  const inputName = formElement.elements[0].value;
  const inputEmail = formElement.elements[1].value;
  const inputStreet = formElement.elements[2].value;
  const inputCity = formElement.elements[3].value;
  const inputState = formElement.elements[4].value;
  const inputZip = formElement.elements[5].value;
  const inputYes = formElement.elements[6].value;
  const inputNo = formElement.elements[7].value;
  const inputPickup = formElement.elements[8].value;

  const dataToSubmit = {
    name: inputName,
    email: inputEmail,
    street: inputStreet,
    city: inputCity,
    state: inputState,
    zip: inputZip,
    yes: inputYes,
    no: inputNo,
    pickup: inputPickup
  };

  console.log(dataToSubmit.name);
  console.log(dataToSubmit.email);
  console.log(dataToSubmit.street);
  console.log(dataToSubmit.city);
  console.log(dataToSubmit.state);
  console.log(dataToSubmit.zip);
  console.log(dataToSubmit.yes);
  console.log(dataToSubmit.no);
  console.log(dataToSubmit.pickup);

  alert('Your submission has been received');
});
