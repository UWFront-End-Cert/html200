let babySupplies = ['diapers', 'wipes', 'bottles', 'clothes', 'snacks']
console.log(babySupplies);

babySupplies.push('diaper cream');
console.log(babySupplies);

babySupplies.splice(2, 1);
console.log(babySupplies);

const babySuppliesList = babySupplies.join(', ');
console.log(babySuppliesList);
