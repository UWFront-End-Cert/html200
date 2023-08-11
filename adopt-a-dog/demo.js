function dogDescription1(){
    let dogName = 'Murphy'
    const dogBreed = ' Breed $';
    const dogCost = ' $100.00'

    result = dogName + dogBreed + dogCost

    alert(result)
}

function dogDescription2(){
    let dogName = 'Poppy';
    const dogBreed = ' Breed $';
    const dogCost = ' $100.00';

    result = dogName + dogBreed + dogCost;

    alert(result);
}

function dogDescription3(){
    let dogName = 'Jack';
    const dogBreed = ' Breed $';
    const dogCost = ' $100.00';

    result = dogName + dogBreed + dogCost;

    alert(result);
}

function dogDescription4(){
    let dogName = 'Duffy';
    const dogBreed = ' Breed $';
    const dogCost = ' $100.00';

    result = dogName + dogBreed + dogCost;

    alert(result)
}

function dogDescription5(){
    let dogName = 'Lucas';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + dogCost;

    alert(result);
}

function dogDescription6(){
    let dogName = 'Jake';
    const dogBreed = ' Breed $';

    result = dogName + dogBreed + dogCost;

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