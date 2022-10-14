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

const qContainerElement = document.getElementById("question-container");
const qElement = document.getElementById("q");
const aElement = document.getElementById("a");
const comBtn = document.getElementById("com-btn");
const nxtBtn = document.getElementById("nxt-btn");