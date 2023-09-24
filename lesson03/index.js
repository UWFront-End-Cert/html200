let artSupplies = [['redpaint' , 'orangepaint' , 'yellowpaint' , 'greenpaint' , 'aquapaint', 'violetpaint' ], ['smallbrush', 'largebrush'], ['hat', 'apron'], ['chair' , 'easel'], ['charcoal','pencil']];

console.log(artSupplies[0].length);

artSupplies.push('cleaning cloth' , 'bucket');

console.log(artSupplies);

artSupplies.splice(2, 1);

console.log(artSupplies);

const artSupplieslist = artSupplies.join(',');

console.log(artSupplies);
console.log(artSupplieslist);