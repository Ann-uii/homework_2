// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

let spanWidth = document.getElementById('widthValue');
let spanHeight = document.getElementById('heightValue');

function updateSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  spanWidth.innerText = width;
  spanHeight.innerText = height;
}

updateSize();

window.addEventListener("resize", updateSize);