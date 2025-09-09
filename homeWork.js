/*
  const button = document.getElementById('btn')
  let originalText = 'смена текста'
  let newText = 'текст изменен'
  
  button.addEventListener('click', () =>{
    if(button.textContent === originalText){
      button.textContent = newText  
    }else{
      button.textContent = originalText 
    }
  })

  button.addEventListener('mouseover', () =>{
    button.style.width = '200px'
  })


  button.addEventListener('mouseout', () => {    
    button.style.width = ''
  })
*/


const input = document.getElementById('input')

input.addEventListener('keyup', (event) =>{
  const key = event.key
  console.log(`нажата клавиша ${key}`);
  
})
const form = document.getElementById('form')

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const formData = new FormData(form)
    const name = formData.get('name')

    console.log('успешный вывод', {name});
    
})


/*
const style = document.getElementById('style')
const text = document.getElementById('text')

style.addEventListener('click', (event) =>{
  event.preventDefault()
  
  const color = document.body.style.backgroundColor

  if(color === 'black'){
    document.body.style.backgroundColor = 'white'
    text.style.color = 'black'
  } else{
    document.body.style.backgroundColor = 'black' 
    text.style.color = 'white'
  }


})
*/