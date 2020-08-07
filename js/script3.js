"use strict";
// урок 2.16

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 30;
    console.log(num);
}
showFirstMessage("123");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(1, 2));

function ret() {
    let num = 50;
    return num;
}
console.log(ret());

const logger = function () {
    console.log("logger");
};
logger();

const calc2 = (a, b) => {   //const calc2 = (a, b) => a + b;
    return a + b;
};
