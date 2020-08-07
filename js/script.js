"use strict";
// Практики 1 (2.12) и 2 (2.15) и 3 (2.18)

let numberOfFilms;

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

//function
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "Тест"),
            b = prompt("На сколько оцените его?", "9.1");
        if (a != null & b != null) {
            if (a != '' & b != '' & a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 & personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        if (a != null && a != '') {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    }
}