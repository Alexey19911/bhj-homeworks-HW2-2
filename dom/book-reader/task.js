const fontControls = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontControls.forEach(control => {
  control.addEventListener('click', (e) => {
    e.preventDefault();
    fontControls.forEach(c => c.classList.toggle('font-size_active', c === control));
    book.classList.remove('book_fs-small', 'book_fs-big');
    book.classList.add(`book_fs-${control.dataset.size}`);
  });
});