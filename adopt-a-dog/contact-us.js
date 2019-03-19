

let form = document.querySelector('');

console.log(form);


for (let i = 0; i <  form.lenght; ++) {
     
     }

let formElement = document.quearySelector('form'); 
console.log(formElement); 

formElement.addEventListener('submit', function(e) {
 e.preventDefault();
  const inputValue = formElement.elements[0].value
  const dogName = formElement.elements[1].value 
  
  // u can put name and dog in ' ' it's personal preference though. 
  
  const dataToSubmit = {
    name: inputValue,
    dog: dogName
  };
   
// do code
  console.log(dataToSubmit);
  
})