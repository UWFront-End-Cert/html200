function submitForm() {
  let formElement = document.querySelector('form');
  console.log(formElement);

  var x = document.getElementById('form');
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
  txt = txt + x.elements[i].value;
}
document.getElementById('form').innerHTML = txt;
  // const inputValue = form.elements[0].value;


  // document.querySelector('input.Name', 'input.email', 'input.streetAddress', 'input.City',
  // 'input.State', 'input.zipCode', 'input.firstTimeadopter', 'input.firstTimeadopterno', 'input.pickupLocation',
  // 'input.leaveAComment');

  // const dataToSubmit = {
  //   Name: inputValue;
  //   email: inputValue;
  //   streetAddress: inputValue;
  //   City: inputValue;
  //   State: inputValue;
  //   zipCode: inputValue;
  //   firstTimeadopter: inputValue;
  //   firstTimeadopterno: inputValue;
  //   pickupLocation: inputValue;
  // };

  console.log(inputValue);

  }
  // form.addEventListener('submit', function(e) {
  //   console.log('this form has been submitted');
  //   e.preventDefault();
  //   const inputValue = form.elements[0].value;
  //
  //   const dataToSubmit = {
  //     #Name: inputValue;
  //     email: inputValue;
  //     streetAddress: inputValue;
  //     City: inputValue;
  //     zipCode: inputValue;
  //     leaveAComment: inputValue;
  //   };
  //   console.log(dataToSubmit);
  // })


// function submitForm(){
//   document.form.submit();
//
//   const dataToSubmit = {
//     Name: input;
//     email: input;
//     streetAddress: input;
//     City: inputValue;
//     zipCode: inputValue;
//     leaveAComment: inputValue;
//   };
//   console.log(dataToSubmit);
// }
