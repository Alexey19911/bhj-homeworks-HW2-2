let timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.innerText);

function countdown() {
    seconds--; 
    if (seconds <= 0) {
     alert("Вы победили в конкурсе!");
    } else {
     timerElement.innerText = seconds;
    }
}
setInterval(countdown, 1000);