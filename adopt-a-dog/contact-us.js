let form = document.querySelector('form');
console.log(form);

function submitForm() {
      const Name = document.getElementById('Name').value;
      const Email = document.getElementById('email').value;
      const streetAddress = document.getElementById('streetAddress').value;
      const City = document.getElementById('City').value;
      const State = document.getElementById('State').value;
      const zipCode = document.getElementById('zipCode').value;
      const pickupLocation = document.getElementById('pickupLocation').value;
      const Comment = document.getElementById('leaveAComment').value;
      alert('Your request has been received.');
      console.log('Name: ' + Name, 'Email: ' + Email, 'Address: ' + streetAddress, City, State, zipCode, 'Pickup Location: ' +
      pickupLocation, 'Comments:' + Comment);

}

//
//
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
