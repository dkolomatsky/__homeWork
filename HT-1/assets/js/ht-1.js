// шкала приоритетности операторов:
// постфиксный дикремент инкремент ----- 16
// унарный + , - , префиксный дик и инкр ------15
// *, / , % ------ 13
// дадавание, отнимание ------ 12
// =, +=, -=, /=, *=  ----- 2

// ============================================== ДЗ по JS , lesson # 1 ===========================================================
var x = 6, y = 14, z = 4;
console.log(x += y - x++ * z); // -4
// логика вычесления:
// 1. отрабатывает постфиксный инкремент: "x" пока не меняется и равен 6
// 2. отрабатывает умножение x*z: получаем 24
// 3. отрабатывает сложение x+y: 6 + 14 получаем 20
// 4. отрабатывает отнимание 20-24: получаем -4 
// 5. отрабатывает присвоение: -4

var x = 6,  y = 14, z = 4;
console.log(z = --x - y * 5); // -65 // x= 5 - 14*5 
// логика вычесления:
// 1. отрабатывает префиксный дикремент:  'x' получает значение 5
// 2. отрабатывает умножение: y * 5 
// 3. отрабатывает отнимание: 5 - 70
// 4. отрабатывает присвоение: -65

var x = 6, y = 14, z = 4;
console.log(y /= x + 5 % z); // вывод 2 
// логика вычисления:
// 1. идет вычесление остатка от деления 5%4=1
// 2. отрабатывает сложение х + остаток от деления: 6 + 1 = 7
// 3. отрабатывает деление y на x: 14/7 =2
// 4. отрабатывает присвоение значения в "y": 

var x = 6, y = 14, z = 4;
console.log(z - x++ + y * 5); // 68
// логика вычесления: 
// 1. отрабатывает постфиксный инкремент: "x" пока не меняется и равен 6
// 2. отрабатывает умножение y*5: получаем 70
// 3. отрабатывает отнимание z-x++: 4 - 6 = -2
// 4. отрабатывает сложение: -2 + 70 = 68
// 5. отрабатывает присвоение: -68

var x = 6, y = 14, z = 4;
console.log(x = y - x++ * z); // -10
// логика вычесления:
// 1. отрабатывает постфиксный инкремент: 'x' получает значение 6
// 2. отрабатывает умножение: 6 * 4 = 24 
// 3. отрабатывает отнимание: 14 - 24 = -10
// 4. отрабатывает присвоение: -10


// создают самостоятельную функцию гератор разметки HTML
 export const createElement = ({
  type, // поле для записи тега
  attrs, // поле для записи атрибута
  container = null, // поле для обертки
  position = 'append'}) => {
  const el = document.createElement(type);// указал что надо создать эл определенного типа
  if(container && position === 'append'){container.append(el)}; // указал куда его добавлять
  if(container && position === 'prepend'){container.prepend(el)}; // указал куда его добавлять
  // через конструктор Object и его свойство keys перебераю все ключи в обьекте attrs  и через forEach() итерируем ключи и потом установим их значение в элементы
  Object.keys(attrs).forEach(key => {
    if(key !== 'innerText'){ // если ключ не равно 'innerText' то тогда ставим атрибут нашему елементу
      el.setAttribute(key, attrs[key]);
    } else { // а если равно то тогда используем свойство innerHTML к элементу и присвоим значение из обьекта attrs
      el.innerHTML = attrs[key];}  
  });
  return el; 
} 
 // Хочу создать вот такую разметку в HTML -----------------
//  <div class="container">
//       <div class="header"><h3 id="header"></h3></div>
//       <div class="nav"><h3 id="nav"></h3></div>
//       <div class="section"><h3 id="section"></h3></div>
//       <div class="footer"><h3 id="footer"></h3></div>
//  </div>
// функция которая генерирует нужные нам элементы разметки HTML
const createTamplate = () => {
  const container = createElement({
    type: 'div',
    attrs: {class: 'container'},
    container: document.body, 
    position: 'prepend'});

  const header = createElement({
    type: 'div',
    attrs:  {class: 'header'},
    container
  });
  createElement({
    type: 'h3',
    attrs: {id: 'header'},
    container :header
   });
  const section = createElement({
    type: 'div',
    attrs:  {class: 'section'},
    container
  });
  createElement({
    type: 'h3',
    attrs: {id: 'section'},
    container :section
   });
  const nav = createElement({
    type: 'div',
    attrs:  {class: 'nav'},
    container
  });
  createElement({
    type: 'h3',
    attrs: {id: 'nav'},
    container: nav
   });
  const footer = createElement({
    type: 'div',
    attrs:  {class: 'footer'},
    container
  });
  createElement({
    type: 'h3',
    attrs: {id: 'footer'},
    container: footer
   });
}
createTamplate();

//  поля для записей ответов пользователя прилетевших из модального окна
const userName = prompt('Напишите Ваше имя?');
const userSurname = prompt('Напишите Вашу Фамилию');
const userAge = prompt('Укажите Ваш возраст');

// получаем доступ к полям в разметке и выводим туда ответы из модального окна
document.getElementById('');
document.querySelector('#header').innerHTML = `My name is ${userName}`;
document.querySelector('#section').innerHTML = `My surname is ${userSurname}`;
document.querySelector('#nav').innerHTML = `My age is ${userAge}`;

//  поля для записей ответов пользователя прилетевших из модального окна
const num1 = parseInt(prompt('Задайте перваое число:'));
const num2 = parseInt(prompt('Задайте второе число:'));
const num3 = parseInt(prompt('Задайте третье число:'));
// поле для записи вычесления среднего арифмитического
const avarage = (num1 + num2 + num3) / 3;
document.querySelector('#footer').innerHTML = `Среднеарифмитическое число равно: ${avarage}`;






