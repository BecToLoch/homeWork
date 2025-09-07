/*
const person = {
  name: 'Bogdan',
  age: 20,
  hobby: [
    'music',
    'game'
  ]
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hobby);
console.log(Object.entries(person));


for(let key in person) {
    console.log(person[key]);
    
}
*/

const person = {
  name: 'Bogdan',
  age: 20,
  hobby: [
    'music',
    'game'
  ]
}

person.city = 'Rostov'
delete person.hobby
person.age = 21 

console.log(person);
console.log(Object.keys(person));
console.log(Object.entries(person));


for(let key in person) {
  console.log(person[key]);
  
}