"use strict";
// Практики 1 (2.12) и 2 (2.15) и 3 (2.18)

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "Тест"),
                b = prompt("На сколько оцените его?", "9.1");
            if (a != null & b != null) {
                if (a != '' & b != '' & a.length < 50) {
                    this.movies[a] = b;
                } else {
                    i--;
                }
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count > 10 & this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            // const a = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            // if (a != null && a != '') {
            //     this.genres[i] = a;
            // } else {
            //     i--;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`);
            if (genres != null && genres != '') {
                genres = genres.toLowerCase();
                this.genres = genres.split(', ');
                this.genres.sort();
            } else {
                i--;
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};

personalMovieDB.writeYourGenres();