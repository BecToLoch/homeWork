/*
for ( let i = 0; i <10 ; i++){
  console.log(i)
}
*/
/* 
let sum = 0
let i = 1

while(i <= 100){
  sum += i
  i++
}

console.log(`Сумма всех чисел от 0 до 100 ${sum}`)
*/

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("простые числа от 1 до 100");
for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
