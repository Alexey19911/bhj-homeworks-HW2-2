// Получаем все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Обходим каждый элемент
dropdowns.forEach(dropdown => {
  // Находим элементы внутри текущего "dropdown"
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');
  const itemElements = dropdown.querySelectorAll('.dropdown__item');

  // Добавляем обработчик события "click" на кнопку
  valueElement.addEventListener('click', () => {
    // Переключаем класс "dropdown__list_active" у списка
    listElement.classList.toggle('dropdown__list_active');
  });

  // Добавляем обработчик события "click" на каждый пункт меню
  itemElements.forEach(item => {
    item.addEventListener('click', (event) => {
      // Запрещаем переход по ссылке
      event.preventDefault();

      // Получаем значение пункта меню
      const selectedValue = item.textContent;

      // Закрываем список
      listElement.classList.remove('dropdown__list_active');

      // Заменяем значение кнопки выбранным значением
      valueElement.textContent = selectedValue;
    });
  });
});
