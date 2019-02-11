function enterNumber() {
  let number = prompt('Enter a number: ')

  function square(numberToSquare) {
    return numberToSquare * numberToSquare;
  }
  alert(number + ' squared is ' + square(number));
}
