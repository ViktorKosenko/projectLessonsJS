'use strict';

const persone = {
    name: 'Alex',
    age: 30,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

persone.userAge = 31;

console.log(persone.userAge);