'use strict';

// new RegExp('pattern', 'flags');

// /pattern/flags

const ans = 'Введите ваше имя 2';

const reg = /в/ig;

// i не зависо от регистра 
// g все
// m с переносом

console.log(ans.search(reg));

console.log(ans.match(reg));

const pass = 'Password...';

console.log(pass.replace(/\./g, '*'));


console.log('12-34-56'.replace(/-/g, ':'));

console.log(reg.test(ans));

// \d - ищем цифры
// \w - буквы
// \s - пробелы

const reg2 = /\d/;

console.log(ans.match(reg2));

const srt = 'My name is R2D2';

console.log(srt.match(/\w\d\w\d/i));

// \D - ищем не цифры
// \W - не буквы
// \S - не пробелы

console.log('w 2'.match(/\W/));