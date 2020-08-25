'use strict';
//3.40

const now = new Date('2020-08-15');
// new Date.parse('2020-08-15');

console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());

console.log(now.getTime());

console.log(now.setHours(12));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

console.log(end - start);