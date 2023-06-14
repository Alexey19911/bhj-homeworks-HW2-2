var cookieImg = document.getElementById('cookie');
var clickCounter = document.getElementById('clicker__counter');
var count = 0;
var isCookieResized = false;

function updateCounter() {
  count++;
  clickCounter.textContent = count;

  if (isCookieResized) {
    cookieImg.style.width = '200px';
    cookieImg.style.height = 'auto';
    isCookieResized = false;
  } else {
    cookieImg.style.width = '150px';
    cookieImg.style.height = 'auto';
    isCookieResized = true;
  }
}

cookieImg.addEventListener('click', updateCounter);
