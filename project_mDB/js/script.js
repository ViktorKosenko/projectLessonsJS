/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvTitle = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdvTitle.forEach(item => {
    item.remove();
});
//1
promoGenre.textContent = "драма";
//2
promoBg.style.backgroundImage = "url('img/bg.jpg')";
//3
promoInteractiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
    </li>
    `;
});