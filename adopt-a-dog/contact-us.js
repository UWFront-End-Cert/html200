let formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e){
  e.preventDefault();

  const fNameValue= formElement.elements[0].value;
  const lNameValue= formElement.elements[1].value;
  const emailValue= formElement.elements[2].value;
  const commentsValue= formElement.elements[3].value;

  const dataToSubmit ={
    fName: fNameValue,
    lName: lNameValue,
    email: emailValue,
    comments: commentsValue
  }

  alert('Your submission has been received!')
  console.log(dataToSubmit)
})
