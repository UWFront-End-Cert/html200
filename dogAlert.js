function myProfile(name, breed, costs) {
    alert('My Name is ' + name + '. I am a ' + breed + '. My adoption cost is ' + costs + '. Can not wait to have fun with you! Please adopt me');
}

// function showMessage() {
//     alert('Welcome to adopt a dog!');
// }
// showMessage();

//to display greetings. Replaced by onMouseOver (header adop a dog) instead.


let totalAdoptionFees =0;

function adoptThisDog(adoptionFees) {
    totalAdoptionFees += adoptionFees;
    console.log(totalAdoptionFees); 
}
