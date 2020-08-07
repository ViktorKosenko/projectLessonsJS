"use strict";
// урок 2.16
//
const srt = 'test';

console.log(srt.toUpperCase());
console.log(srt.toLowerCase());
console.log(srt);
//
const fruit = "Some fruit";

console.log(fruit.indexOf("q"));
//
const logg = "Hello world";

console.log(logg.slice(logg.indexOf(" ") + 1));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));
//
const num = 12.2;

console.log(Math.round(num));
//
const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));
