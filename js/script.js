"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// let i = 0;
// do {
//     nameMovies = prompt("Один из последних просмотренных фильмов?", "Тест");
//     if (nameMovies.length != 0 & nameMovies.length <= 50) {
//         balMovies = prompt("На сколько оцените его?", "9.1");

//         if (balMovies.length != 0 & balMovies.length <= 50) {
//             personalMovieDB.movies[nameMovies] = balMovies;
//             i++;
//         }
//     }
// } while (i < 2);

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

if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 & personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);