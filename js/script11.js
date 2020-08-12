'use strict';
//2.27

let x = 5;
alert(x++); // =5

console.log(`${typeof([] + false - null + true)} val = ${([] + false - null + true)}`);

// let y = 1;
// let x = y = 2;
// alert(x);
// = 2

console.log([] + 1 + 2); //"12"

alert("1" [0]); // "1"

console.log(2 && 1 && null && 0 && undefined); // И запинается на false

console.log(!!(1 && 2) === (1 && 2));

//         3     3    3
alert(null || 2 && 3 || 4); // ИЛИ запинается на правде

let a = [1, 2, 3],
    b = [1, 2, 3];

console.log(a == b);

alert(+"Infinity");

console.log("Ежик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || false);
