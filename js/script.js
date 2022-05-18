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

// Task 1 start
let advs = document.querySelectorAll('.promo__adv img');

advs.forEach(adv => {
    adv.remove();
});
// Task 1 end

// Task 2 and 3 start
let poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

genre.innerHTML = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';
// poster.setAttribute('src', '../img/bg.jpg') // не получилось
// Task 2 and 3 end

// Task 4 and 5 start
let movieFilms = document.querySelector(".promo__interactive-list");

movieFilms.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach(function (item, i) {
    movieFilms.innerHTML = movieFilms.innerHTML + `
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>`;
});
// Task 4 and 5 end