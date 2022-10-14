const qContainerElement = document.getElementById("question-container");
const qElement = document.getElementById("q");
const aElement = document.getElementById("a");
const comBtn = document.getElementById("com-btn");
const nxtBtn = document.getElementById("nxt-btn");

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

