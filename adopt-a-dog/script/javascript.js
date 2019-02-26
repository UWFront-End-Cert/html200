let dogInfo =[
  {name : "Murphy" , breed : "Great Dane" , age : 2 , cost : 123.45},
  {name : "Poppy", breed : "Samoyed" , age : 1 , cost : 123.45},
  {name : "Jack" , breed : "Pug" , age: 3 , cost : 123.45},
  {name : "Duffy", breed : "Husky" , age: 2.5 , cost : 123.45},
  {name : "Lucas", breed : "Labrador" , age : 6, cost : 123.45},
  {name : "Jake", breed : "Tosa" , age : 5, cost : 123.45},
  {name : "Angus", breed: "Beagle" , age : 1.2, cost : 123.45},
  {name : "Violet", breed: "Poodle", age : 4, cost : 123.45},
  {name : "Piper", breed: "Doberman" , age : 3, cost : 123.45},
  {name : "Maximus", breed: "Rootweiler" , age : 5, cost : 123.45},
  {name : "Luna", breed: "Dalmatian" , age : 3, cost : 123.45},
  {name : "Stella", breed: "Bullterrier" , age : 2, cost : 123.45},
]

function displayInfo(i) {
    alert ('Meet '+ dogInfo[i].name + ', a ' + dogInfo[i].age + '-year-old ' + dogInfo[i].breed + ' !' + 'The adoption price is : $' + dogInfo[i].cost);
}

function checkoutCalculation(price) {
  let temp = sessionStorage.getItem("cartAmount");

  sessionStorage.setItem("cartAmount", (Number(temp) + Number(price)));

  document.getElementById('cartAmount').innerHTML = '$' + sessionStorage.getItem("cartAmount");

  alert ('Your Total Adoption Cost is : $' + sessionStorage.getItem("cartAmount") + '. Checkout to complete the Adoption process.');
}

function webpageOnLoad() {

  if (sessionStorage.getItem("loadVal") === null) {
    sessionStorage.setItem("loadVal","1");
    sessionStorage.setItem("cartAmount","0.00");
}

  document.getElementById('cartAmount').innerHTML = '$' + sessionStorage.getItem("cartAmount");
}

function formOnLoad() {
  document.getElementById('finalPrice').innerHTML = '$' + sessionStorage.getItem("cartAmount");
  document.getElementById('cartAmount').innerHTML = '$' + sessionStorage.getItem("cartAmount");
}


function thankYou() {
  alert ('Thank You for Your Support ....!');
}
