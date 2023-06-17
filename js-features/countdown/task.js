var timerElement = document.getElementById("timer");
var seconds = parseInt(timerElement.innerText);
var intervalId; // Идентификатор интервала

function countdown() {
    seconds--;

    if (seconds <= 0) {
        clearInterval(intervalId); // Остановка интервала
        alert("Вы победили в конкурсе!");
    } else {
        timerElement.innerText = seconds;
    }
}

intervalId = setInterval(countdown, 1000);
