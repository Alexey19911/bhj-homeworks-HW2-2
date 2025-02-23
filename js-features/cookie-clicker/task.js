var cookieImg = document.getElementById('cookie');
var clickCounter = document.getElementById('clicker__counter');
var count = 0;
var isCookieResized = false;

function updateCounter() {
  count++;
  clickCounter.textContent = count;

  if (isCookieResized) {
    cookieImg.width = ++clickCounter.textContent % 2 ? 250 : 200;
     } else {
    cookieImg.width = ++clickCounter.textContent % 2 ? 150 : 100;
    }
}

cookieImg.addEventListener('click', updateCounter);
