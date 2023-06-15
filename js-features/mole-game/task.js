const deadCounter = document.getElementById('dead');

const lostCounter = document.getElementById('lost');

const holes = document.getElementsByClassName('hole');

// Функция для получения элемента лунки по индексу
function getHole(index) {
  return document.getElementById(`hole${index}`);
}

// Зарегистрируем обработчик события для каждой лунки
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = function() {
    // Проверяем наличие класса "hole_has-mole"
    if (hole.classList.contains('hole_has-mole')) {
      // Если класс есть, увеличиваем счетчик убитых кротов
      deadCounter.textContent = Number(deadCounter.textContent) + 1;
      // Убираем класс "hole_has-mole" у лунки
      hole.classList.remove('hole_has-mole');
    } else {
      // Если класса нет, увеличиваем счетчик промахов
      lostCounter.textContent = Number(lostCounter.textContent) + 1;
    }
    // Проверяем условия победы и поражения
    if (Number(deadCounter.textContent) === 10) {
      // Если убито 10 кротов, выводим сообщение о победе
      alert('Вы победили!');
      // Обнуляем счетчики
      resetCounters();
    } else if (Number(lostCounter.textContent) === 5) {
      // Если 5 промахов, выводим сообщение о поражении
      alert('Вы проиграли!');
      // Обнуляем счетчики
      resetCounters();
    }
  };
}

// Функция для обнуления счетчиков и удаления класса "hole_has-mole" у всех лунок
function resetCounters() {
  deadCounter.textContent = '0';
  lostCounter.textContent = '0';
  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.classList.remove('hole_has-mole');
  }
}

// Функция для добавления крота в случайную лунку
function setMole() {
  const randomHoleIndex = Math.floor(Math.random() * 9) + 1;
  const hole = getHole(randomHoleIndex);
  hole.classList.add('hole_has-mole');
}

// Вызываем функцию setMole каждую секунду с помощью setInterval
setInterval(setMole, 1000);
