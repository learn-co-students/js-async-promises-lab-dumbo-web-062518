const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let counter = 0;

const startBtn = document.getElementById('start-button')
startBtn.addEventListener('click', displayQuestionOnClick)
const trubttn = document.getElementById('true-div')
const falsbttn = document.getElementById('false-div')
trubttn.classList.add('hide')
falsbttn.classList.add('hide')


function appendQuestion(question){
  toggleTrueAndFalseButtons()
  const container = document.querySelector('#question-container')
  container.innerText = ''
  container.innerText = question.questionText
}

function askQuestionThen(){

  return new Promise((resolve, reject) => {
    question = questions[0]
    resolve(appendQuestion(question))
    })
}


function removeQuestion(){
  const container = document.querySelector('#question-container')

  container.innerText = ''
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen()
    .then(setTimeout(toggleTrueAndFalseButtons, time))
    .then(removeQuestion)
}

function trueAndFalseButtons(){
  const trubttn = document.getElementById('true-div')
  const falsbttn = document.getElementById('false-div')
  trubttn.innerText = "TRUE"
  falsbttn.innerText = "FALSE"
  let bttnArr = [trubttn, falsbttn]
  return bttnArr
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function (button) {
    if(button.classList.toString().includes('hide')){
      return  button.classList.remove('hide')
    } else{
      return button.classList.add('hide')
    }
  })
}

function displayQuestionOnClick(){
  console.log("hey")
}
