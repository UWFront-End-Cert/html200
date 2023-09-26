let artSupplies = ['red paint', 'orange paint', 'yellow paint', 'green paint', 'aqua paint', 'violet paint'];

console.log(artSupplies.length);

artSupplies.push( 'goldpaint' );

console.log(artSupplies);

artSupplies.splice(2, 1);

console.log(artSupplies);

const artSupplieslist = artSupplies.join(',');

console.log(artSupplieslist);