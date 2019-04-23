/*jslint devel: true */
/*jslint node: true */
'use strict';

let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let title = document.getElementById('title');
let advert = document.querySelector('.adv');
let promptId = document.querySelector('#prompt');
let navBar = document.getElementsByTagName('nav');
let footer = document.querySelector('.footer');

let newMenuList = document.createElement('li');  // новый пункт меню


    newMenuList.classList.add('menu-item');  // новому пункту добавляю класс
    newMenuList.textContent = 'Пятый пункт';  // и текст
    menu.appendChild(newMenuList);  // вставляю в конец списка
    menu.insertBefore(menuItem[2], menuItem[1]);  // восстановил порядок в меню

    document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // заміна backgroundImage
    title.textContent = 'Мы продаем только подлинную технику Apple';  // добавил в заголовок текст "подлинная"
    advert.remove(); // видаляємо блок з рекламою

    
let ask = prompt('Ваше отношение к технике Apple', '');  // окошко с вопросом

    promptId.textContent = ask;  // записываю ответ в блок prompt на странице