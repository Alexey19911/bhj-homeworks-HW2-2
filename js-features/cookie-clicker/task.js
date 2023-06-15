let cookieImg = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let count = 0;
let isCookieResized = false;

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
