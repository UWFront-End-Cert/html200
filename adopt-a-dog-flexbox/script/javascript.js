
function displayInfo(name,breed,age,price) {
    alert ('Meet '+ name + ', a ' + age + '-year-old ' + breed + ' !' + 'The adoption price is : $' + price);
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
  document.getElementById('finalPrice').innerHTML = '$' + sessionStorage.getItem("cartAmount");
}


function thankYou() {
  alert ('Thank You for Your Support ....!');
}
