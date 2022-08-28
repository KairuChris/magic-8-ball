import './styles/style.css'
import answerList from './answerList'

let ask = document.getElementById('form')
let textContainer = document.getElementsByClassName('text-container')[0]
let symbol = document.getElementsByClassName('symbol')[0]
let inputField = document.getElementById('input-field')


ask.addEventListener('submit', e => {
  e.preventDefault()

  if(inputField.value === ''){
    alert("Ask something first")
    return
  }

  let randomAnswer = Math.floor(Math.random() * answerList.length)
  let text = document.getElementsByClassName('text')[0]
  symbol.classList.add('hide')

  symbol.addEventListener('transitionend', () => {
    textContainer.classList.add('appear')
    text.textContent = answerList[randomAnswer]
    text.classList.add('appear')
  })

  text.textContent = answerList[randomAnswer]
  
  e.target.reset()
})