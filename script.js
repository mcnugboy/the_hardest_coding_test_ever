const qContainerElement = document.getElementById("question-container");
const qElement = document.getElementById("q");
const aElement = document.getElementById("a");
const comBtn = document.getElementById("com-btn");
const nxtBtn = document.getElementById("nxt-btn");

const questions = [
    {
        question: 'What is a regex?',
        answers: [
            { text: 'A genre of partying', correct: false },
            { text: 'A brand of soup most favored by Trump', correct: false },
            { text: 'A special string representing a pattern to be matched in a search query', correct: true },
            { text: 'A very expensive brandy that is used in very exquisite dishes', correct: false },
        ]
    },
    {
        question: 'What does a <template> tag do?',
        answers: [
            { text: 'A tag that allows you to hide info from a user on the page', correct: true },
            { text: 'A tag that creates a templated form for the users to fill out', correct: false },
            { text: 'A tag that generates user input into a meme', correct: false },
            { text: 'A tag that can be used to edit users passwords with a single click', correct: false },
        ]
    },
    {
        question: 'What does API stand for?',
        answers: [
            { text: 'Asset Proportion Index', correct: false },
            { text: 'Application Programming Interface', correct: true },
            { text: 'Airplane Pilot Intervention', correct: false },
            { text: 'Ascendent Project Integration', correct: false },
        ]
    },
]
    
var time = 40;

function setTimer() {
    setInterval(function () {
        var timer = document.getElementById("display-time");
        if (time > 0 && i < 5)  {
            time = time -1;
            timer.textContent = "You've got " + time + " seconds left";
        }
    }), 1000
};

let shuffleQ, currentQIndex;

comBtn.addEventListener('click', startQuiz);
nxtBtn.addEventListener('click', () => {
    currentQIndex++
    nxtQ()
});

function startQuiz () {
    comBtn.classList.add('hide'),
    shuffleQ = questions.sort(() => Math.random() - .5)
    currentQIndex = 0
    qContainerElement.classList.remove('hide')
    nxtQ()
};

function nxtQ() {
    showQ(shuffleQ[currentQIndex]),
    resetState()
};

function showQ(question) {
    qElement.innertext = question.question,
    question.answers = forEach(answer => {
        const btn = document.createElement('button')
        btn.innertext = answer.text,
        btn.classList.add('button')
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener('click', selectA)
        aElement.appendChild(btn)
    })
};

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(aElement.children).forEach(button => {
      setStatusClass(btn, button.dataset.correct)
    })
    if (shuffleQ.length > currentQIndex + 1) {
      nxtButn.classList.remove('hide')
    
    }
  };

  function resetState () {
    clearStatus(document.body)
    nxtBtn.classList.add('hide')
    while (aElement.firstChild) {
      aElement.removeChild(aElement.firstChild)
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  };

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  };

function endQuiz() {
    clearInterval(setTimer);
    var questionDisplay = document.getElementById("question-id");
    questionDisplay.style.display = "none";
    };
