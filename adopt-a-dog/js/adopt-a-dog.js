// const button = document.querySelector('button');
// button.addEventListner(Click, adoptTally);
let totalTally = 0;
function adoptTally() {
  totalTally += 123;
  alert(totalTally);
}
function dogInfo() {
  let img = document.getElementsByClassName('dog-card')
  let alt = img.getAttribute("alt");
  alert(alt);
}
