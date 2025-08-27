let a = 2;
let b = 2;
let c = 2;

console.log(a * b + c);

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

let sin = Math.sin(degreesToRadians(54));
let cos = Math.cos(degreesToRadians(16));

const result = Math.pow(sin * cos, 2);
let rounded = Math.round(result * 100) / 100;

console.log(rounded);

const numerator = 16 * Math.sqrt(13.1 * 71.90);
const denominator = Math.pow(2.4, 1) / Math.pow(7, 4);
const secondPart = 3 + Math.sqrt(49);
const result2 = ((numerator / denominator) + secondPart) * Math.pow(2, 7);
const roundedResult = Math.round(result2);

console.log(roundedResult);


let aa = 10 + 5;       
let bb = a * 2;      
let cc = b - 7;       
let d = c / 3;        

function isEven(num) {
  if (num % 2 === 0) {
    return `${num} — чётное число.`;
  } else {
    return `${num} — нечётное число.`;
  }
}

console.log(isEven(aa)); // 15
console.log(isEven(bb)); // 30
console.log(isEven(cc)); // 23
console.log(isEven(Math.floor(d))); 
   

let name 

if (!name) {
   console.log('Hello, Guest!');
  } else {
    console.log(`Hello, ${name}!`);
  }