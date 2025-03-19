// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

document.getElementById("deleteButton").addEventListener("click", function () {
  let dropdown = document.getElementById("dropdown");
  let selectedOption = dropdown.options[dropdown.selectedIndex];

  if (selectedOption) {
    selectedOption.remove();
  }
});