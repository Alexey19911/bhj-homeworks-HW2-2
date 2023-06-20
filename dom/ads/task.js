var cases = document.getElementsByClassName('rotator__case');
var currentIndex = 0;
function changeAd() {
cases[currentIndex].classList.remove('rotator__case_active');
currentIndex++;
if (currentIndex >= cases.length) {
    currentIndex = 0;
}
    cases[currentIndex].classList.add('rotator__case_active');

  }
  setInterval(changeAd, 1000);
