'use strict';
//2.22

let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ссылка на obj

copy.a = 10; //так же изменяется obj

console.log(obj);
console.log(copy);

function copyObj(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numders = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numders);

newNumbers.c.x = 10;
newNumbers.b = 10;

console.log(numders);
console.log(newNumbers);
