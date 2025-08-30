/*
let number = prompt('введи число')

if (number >= 0){
   console.log ('положительное')
} else if (number = 0){
  console.log('это ноль')
} else if (number <= 0) {
  console.log ('отрицательное чило')
}
*/
/*
function calculetBMI(weigt , height){
  return weigt / (height ** 2)
}

function getCategoryBMI(bmi){
  if (BMI <= 16){
    return ('Выраженный дефицит массы тела')   
  } else if (BMI <= 18.5){
    return ('Недостаточная масса тела')
  } else if (BMI <= 25){
    return ('Нормальный вес')
  } else if (BMI <= 30){
    return ('Избыточная масса тела (предожирение)')
  } else if (BMI <= 35){
    return ('Ожирение первой степени"')
  } else if (BMI <= 40){
    return ('Ожирение второй степени')
  } else {
    return ('Ожирение третьей степени')
  }
} 

const weigt = parseFloat(prompt('введите ваш вес в килограммах:'))
const height = parseFloat(prompt('введите ваш рост в метрах'))

const BMI = calculetBMI(weigt , height)
const category = getCategoryBMI(BMI)

console.log (`\n ваш индекс массы тела: ${BMI.toFixed(2)}`)
console.log (`категория ${category}`)
*/
/*
const month = parseFloat(prompt('введите номер месяца'))
let monthName

switch (month){
  case 1:
    monthName = 'Январь';
  break;  
  case 2:
    monthName = 'Февраль';
  break;  
  case 3:  
    monthName = 'Март';
  break;  
  case 4:
    monthName = 'Апрель';
  break;  
  case 5:
    monthName = 'Май';
  break;  
  case 6:
    monthName = 'Июнь';
  break;  
  case 7:
    monthName = 'Июль';
  break;  
  case 8:
    monthName = 'Август';
  break;  
  case 9:
    monthName = 'Сентябрь';
  break;  
  case 10:
    monthName = 'Октябрь';
  break;  
  case 11:
    monthName = 'Ноябрь';
  break;  
  case 12:
    monthName = 'Декабрь';
  break;  
}

console.log(monthName)
*/


const number = parseFloat(prompt('угадайте число от 1 до 5'))
let answer

switch (number){
  case 1:
    answer = 'рядом';
  break;  
  case 2:
    answer = 'молодец возьми печеньку с полочки';
  break;  
  case 3:  
    answer = 'увы и ах';
  break;  
  case 4:
    answer = 'мимо мимо';
  break;  
  case 5:
    answer = 'далеко ушел';
  break;  
} 

console.log(answer)
