// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

let firstButton = document.getElementById('button1');
let secondButton = document.getElementById('button2');
let thirdButton = document.getElementById('button3');

function changeOnclick() {
  firstButton.style.backgroundColor = 'blue';
}

firstButton.onclick = changeOnclick;

function changeOndblclick() {
  secondButton.style.backgroundColor = 'pink';
}

secondButton.ondblclick = changeOndblclick;

function changeOnmouseover() {
  thirdButton.style.backgroundColor = 'brown';
}

function changeOnmouseout() {
  thirdButton.style.backgroundColor = '';
}

thirdButton.onmouseover = changeOnmouseover;
thirdButton.onmouseout = changeOnmouseout;