'use strict';
//2.31

const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// не правильно
// btn.onclick = function () {
//     alert('Click');
// };

// btn.onclick = function () {
//     alert('Second Click');
// };

let i = 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});