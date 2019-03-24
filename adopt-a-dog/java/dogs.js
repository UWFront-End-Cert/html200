// CHECKOUT
let total = 0;
let buttonValue = 123.45;

function calcTotal() {
  total = total + buttonValue;
  alert("Total: " + '$' + total);
}

function navMenu() {
  var x = document.getElementById("MyNav");
  if (x.className === "Nav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
  $('.hp-dog-box').hover(function() {
   $('.hp-dog-box').addClass('hover');
 }, function() {
   $('.hp-dog-box').removeClass('hover');
 })
});
