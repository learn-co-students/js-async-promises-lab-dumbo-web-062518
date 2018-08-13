const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

// let question = questions[0];
let question;

function appendQuestion(question) {
  document.querySelector('.question-container').innerHTML = question.questionText
}

function askQuestionThen() {
  return new Promise((resolve, reject) => {
    question = questions[0]
    resolve(appendQuestion(question))
  })
}

function removeQuestion() {
  document.querySelector('.question-container').innerHTML = ''
}

function askQuestionThenRemoveQuestion() {
  q = questions[0]
  appendQuestion(q)
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(removeQuestion())
    }, 10000)
  })
}

function trueAndFalseButtons() {
  const trueFalseButtons = []
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  btns[0].innerHTML = "TRUE"
  btns[1].innerHTML = "FALSE"
  for (let i = 0; i < btns.length; i++) {
    trueFalseButtons.push(btns[i])
  }
  return trueFalseButtons
}

function toggleTrueAndFalseButtons() {
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  btns.forEach( btn => {
    return btn.classList.contains('hide') ? btn.classList.remove('hide') : btn.classList.add('hide')
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('.waves-effect')
  let q = document.querySelector('.question-container')
  q.classList.add('hide')
  btn.addEventListener('click', () => {
    let show = document.querySelector('.true-false-list').querySelectorAll('.btn')
    show.forEach( btn => {
      if (btn.classList.contains('hide')) {
        btn.classList.remove('hide')
      }
    })
    if (q.classList.contains('hide')) {
      q.classList.remove('hide')
    }
  })
}
