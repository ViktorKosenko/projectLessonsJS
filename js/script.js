"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameMovies1 = prompt("Один из последних просмотренных фильмов?", "Тест"),
    balMovies1 = prompt("На сколько оцените его?", "9.1"),
    nameMovies2 = prompt("Один из последних просмотренных фильмов?", "Тест"),
    balMovies2 = prompt("На сколько оцените его?", "9.1");

personalMovieDB.movies = {
    [nameMovies1]: balMovies1,
    [nameMovies2]: balMovies2
};

console.log(personalMovieDB);