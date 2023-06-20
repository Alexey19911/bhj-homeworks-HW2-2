const revealElements = document.querySelectorAll(".reveal");

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight) &&
    rect.right <= (window.innerWidth )
  );
}
function handleScroll() {
    revealElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("reveal_active");
      } else {
        element.classList.remove("reveal_active");
      }
    });
  }
window.addEventListener("scroll", handleScroll);
handleScroll();