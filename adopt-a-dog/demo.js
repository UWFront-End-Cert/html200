$(document).ready(function(){
    $("div.flex-item").hover(function(){
      $(this).css("background-color", "yellow");
    });
  });

function dogDescription1(mDog){
    let dogName = 'Murphy';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + mDog;

    alert(result);
}

function dogDescription2(pDog){
    let dogName = 'Poppy';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + pDog;

    alert(result);
}

function dogDescription3(jaDog){
    let dogName = 'Jack';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + jaDog;

    alert(result);
}

function dogDescription4(dDog){
    let dogName = 'Duffy';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + dDog;

    alert(result)
}

function dogDescription5(lDog){
    let dogName = 'Lucas';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + lDog;

    alert(result);
}

function dogDescription6(jDog){
    let dogName = 'Jake';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + jDog;

    alert(result);
}

function dogDescription7(aDog){
    let dogName = 'Angus';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + aDog;

    alert(result);
}

function dogDescription8(vDog){
    let dogName = 'Violet';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + vDog;

    alert(result);
}

let totalCost = 0;
let anyDog = 0;

function dogTotalcost(anyDog){
    
    function adder(anyDog){
        totalCost = totalCost + anyDog
    }

    adder(anyDog);
    alert(totalCost);
}