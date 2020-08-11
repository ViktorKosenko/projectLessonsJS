'use strict';
//2.23

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

// const jonh = {
//     health: 100,
// };
//Object.setPrototypeOf(jonh, soldier); //в динамике
//jonh.__proto__ = soldier; //старое представление 

const jonh = Object.create(soldier);

jonh.sayHello();



console.log(jonh.armor);