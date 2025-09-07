
const text = document.getElementById('text')
const a = document.getElementById('a')
/*
text.textContent = ('что-то новое')
console.log(text.textContent);
*/

/*
text.classList.add('red')
text.style.color = 'red'
text.style.backgroundColor = 'black'
*/

/*
const p = document.createElement ('p')

p.textContent = 'что-то новое и не похожее на прошлое'

document.body.appendChild(p)
*/

/*
const delet = (id) => {
  const pp = document.getElementById(id)

  if(pp){
    pp.remove()
    console.log(`елемент с ID ${id} удален`);
  } 
}
*/

/*
a.setAttribute('href', 'https://www.youtube.com/watch?v=zZBiln_2FhM&t=43s')
console.log(a.getAttribute('href'));
*/

/*
const p = document.createElement ('p')
p.classList.add('text2')
p.textContent = 'что-то еще раз новое и не похожее на прошлое'

document.body.appendChild(p)
*/

const toggleClass = () =>{
  const tt = document.getElementById('myElement')
  
  tt.classList.toggle('active')
  const hasClass = tt.classList.contains('active')

  console.log(`класс 'active' присутствует: ${hasClass}`);
}