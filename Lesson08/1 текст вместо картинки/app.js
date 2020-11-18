'use strict';
const all_btnEl = window.document.querySelectorAll('button');
all_btnEl.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    let card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };
    const txt_in_btn = card.button.innerText;
    if (txt_in_btn == "Подробнее") {
        showMoreText(card);
    } else if (txt_in_btn == "Отмена") {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */

function hideMoreText(card) {
    // картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';
    // внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('.desc').remove();
    // кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */

function showMoreText(card) {
    // картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // сохраняем произвольный текст в переменную
    const some_txt = 'Lorem';
    // внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${some_txt}</div>`);
    // внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = "Отмена";
}