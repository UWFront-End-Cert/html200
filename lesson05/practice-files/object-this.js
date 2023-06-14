// OBJECT + THIS
// Objects are containers that contain many variables/values in an organized manner
// Values are stored as key:value pairs
// Object values can be anything ... strings, numbers, other objects, functions, etc


// STORING VALUES IN A VARIABLE OBJECT
const dog = {
    name: 'Fido',
    age: 4,
    owner: {
        firstName: 'Mary',
        lastName: 'Smith'
    },
    speak: function() {
    console.log('woof!');
    },
    getName: function() {
        console.log(this.name);
    }
}

console.log(dog.name);
console.log(dog.age);

