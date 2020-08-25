'use strict';
//3.46
//1
function showThis(a, b) {
    console.log(this);

    function sum() {
        return a + b;
    }
}

showThis(4, 5);
//2
const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
//3
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);
//4.1
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);
//4.2
function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));

// 1) Обычная функция: this = window, но если 'use ctrict' - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const obj2 = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj2.sayNumber();

const double2 = a => a * 2;

console.log(double2(2));