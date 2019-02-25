let murphy = "Name: Murphy\nBreed: Mutt\nFee: 123.45";
let poppy = "Name: Poppy\nBreed: Mutt\nFee: 123.45";
let jack = "Name: Jack\nBreed: Mutt\nFee: 123.45";
let lucus = "Name: Lucus\nBreed: Mutt\nFee: 123.45";
let jake = "Name: Jake\nBreed: Mutt\nFee: 123.45";
let duffy = "Name: Duffy\nBreed: Mutt\nFee: 123.45";
let angus = "Name: Angus\nBreed: Mutt\nFee: 123.45";
let violet = "Name: Violet\nBreed: Mutt\nFee: 123.45";


function dogInfo(dogName) {
  alert(dogName);
}

let totalAdoptionFees = 0;

function calcTotal(fee) {
  totalAdoptionFees += fee;
  alert('Total adoption fees: ' + totalAdoptionFees);
}
