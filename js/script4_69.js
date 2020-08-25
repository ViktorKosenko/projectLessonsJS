'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возвраст ${userAge}`);
    };

    this.getAge = function () {
        return userAge;
    };

    this.setAge = function (age) {
        if (typeof (age) === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Err');
        }
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.getAge());

ivan.name = 'Alex';
ivan.setAge(30);
ivan.setAge(300);

console.log(ivan.getAge());

ivan.say();

// Class
class UserClass {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Kos';

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возвраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof (age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Err');
        }
    }
}

const ivan2 = new UserClass('Ivan', 27);

console.log(ivan2._age);
ivan2._age = 99;

ivan2.say();