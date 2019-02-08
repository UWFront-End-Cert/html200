let ingredients = ['onion', 'carrot', 'celery', 'garlic', 'potato', 'kale'];

console.log(ingredients);

ingredients.push('salt');

console.log(ingredients);

ingredients.splice(2, 1);

console.log(ingredients);

let shoppingList = ingredients.join(', ');

console.log(shoppingList);
