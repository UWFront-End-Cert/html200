let favoriteDogs = ['bordercollie', 'pitbull', 'borzoi', 'ridgeback', 'bloodhound', 'cattledog'];
favoriteDogs.push('poodle');
favoriteDogs.splice(2, 1);
const dogList = favoriteDogs.join(', ');
for (let i = 0; i < favoriteDogs.length; i++) {
  console.log(favoriteDogs[i]);
}
console.log(dogList);

// -->  
"bordercollie" 
"pitbull"
"ridgeback"
"bloodhound"
"cattledog"
"poodle"
"bordercollie, pitbull, ridgeback, bloodhound, cattledog, poodle"