/*
const number = [1, 2, 3, 4, 5]

function midNumber(number){
  const  sum = number.reduce((acc, num) => acc + num, 0)
  return sum /number.length
}

console.log(midNumber(number));
*/

/*
const user = {
  name: 'bogdan',
  age: 20 ,
  country: 'Russia'
}

const {name, age, country} = user 

console.log(name);
console.log(age);
console.log(country);
*/

/*
const user = [ 'bogdan', [20], {city: 'Rostov'}]

 const [name, [age], {city}] = user

console.log(name);
console.log(age);
console.log(city);
*/

/*
const originalMassiv = [1, 2, 3, 4, 5]

const copiMassiv = [0, ...originalMassiv, 6]
console.log(copiMassiv);
*/

/*
function removeUser(obj, userRemove){
  const { [userRemove]: remove, ...rest } = obj
  return rest
}

const user = {
  name: 'bogdan',
  age: 20 ,
  country: 'Russia'
}

const result = removeUser(user, 'age')
console.log(result);
*/

