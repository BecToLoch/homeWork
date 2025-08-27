const name = "bogdan";
console.log(typeof name);

let age = 20;
console.log(typeof age);

const coolVideo = true;
const badVideo = false;

console.log(typeof coolVideo);
console.log(typeof badVideo);

let price;
console.log(typeof price);

let a = null
console.log(typeof a)

/*
разница между хранением по значению  и по ссылке в том что применяется зачастую к разным типап данных
так же в храние по значению создается отдельная копия данных а 
в хранению по ссылке сохраняется не значение а ссылка
хранение по значинею относиться к числам стокам и т.п.
если же брать ссылочное храниение то оно относиться к объектам массивам и фенкциям 
примеры ниже
*/

let obj1 = {name: 'bogdan'}
let obj2 = obj1

obj1.name = 'саша'

console.log(obj1.name)
console.log(obj2.name)


let c = 5
let b = c

c = 10

console.log(c)
console.log(b)