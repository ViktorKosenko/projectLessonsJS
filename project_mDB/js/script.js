'use strict';
//3.33

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', () => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favarite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, movieList);
        }

        if (favarite) {
            console.log('Добавляем любимый фильм');
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = "драма";
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };

    //3
    const sortArr = (arr) => {
        arr.sort();
    };

    deleteAdv(adv);

    createMovieList(movieDB.movies, movieList);

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        films.forEach((film, i) =>
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
        `);

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
});