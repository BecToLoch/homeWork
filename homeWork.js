/*
const isPalindrome = (str) =>{
  const lowerStr = str.toLowerCase()
  const revers = lowerStr.split('').reverse().join('')

  return lowerStr === revers
}

console.log(isPalindrome('hellow'));
*/

/*
const findShortestWord = (str) => {
    const words = str.split(/\s+/);
    let shorTest = words[0]
    
    for (let word of words)
      if(word.length < shorTest.length){
        shorTest = word
    }
      return shorTest
}

console.log(findShortestWord('всем привет здравья желаю'));
*/

/*
const createPhoneNumber = (number) =>{
  const str = number.toString()
  
  if (str.length !== 9){
    throw new Error ('неправильный номер')
  }

  return (`8 (${str.slice(0, 3)}${str.slice(3,6)}-${str.slice(6)})`)
}

console.log(createPhoneNumber('12345689'));
*/

/*
const masiv = [2, 3, 1, 5, 4]

 const src = (arr) => {
   let min = arr[0]
   let max = arr[0]
  
   for (let i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i] 
    }
    if (arr[i] > max){
      max = arr[i] 
    }
   }
   return {
    min: min,
    max: max
   }
 }

console.log(src(masiv));
*/

const masiv = [2, 33, 42, 52, 3];

const sorting = (arr) => {
  const n = arr.length

  for(let i = 0; i < n-1; i++){
    for(let j = 0; j < n - 1 - i; j++){
      if (arr[j] > arr[j + 1]){
         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
};

console.log(sorting(masiv));
