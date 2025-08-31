/*
const number = [1, 2, 3, 4, 5]

const doubled = number.map((item) => {
      return item * item
})

console.log(doubled);
*/

/*
const Number = [1, 2, 2, 3, 4, 5, 5, 5, 6]

const allNumber = Number.filter((item, index, array) =>{
      return array.indexOf(item) === index;
})

console.log(allNumber);
*/

/*
const Number = [1, 2, 3, 4, 5, 6]
 
const sum = Number.reduce((total, Number) => {
  return total + Number
})

console.log(sum);
*/

/*
function reverseArrayWithTemp(arr) {
    const temp = [...arr];

        for(let i = 0; i < arr.length; i++) {
        const num = (arr.length - i) - 1;
        arr[i] = temp[num];
    }
    return arr;
}

const array = [1, 2, 3, 4, 5];
console.log(reverseArrayWithTemp(array));
*/

let stringLet = "Строка с let";
const stringConst = "Строка с const";
// если их переопределить то измениться let но не const ибо const нельзя изменить

let arrayLet = [1, 2, 3];
const arrayConst = [4, 5, 6];

arrayLet.push(4);
arrayConst.pop(6);

console.log(arrayLet);
console.log(arrayConst);
//опять же если переопределять то получиться только с let const выдаст ошибку ибо он крутой и непоколебим
