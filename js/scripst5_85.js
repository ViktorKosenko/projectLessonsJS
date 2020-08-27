let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function () {
        say = () => {
            console.log(this);
        }
        say();
    }
};

obj.sayNumber();

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');

function max(a, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67);

const arr1 = [1, 2, 5],
    arr2 = [43, 2, 6];

const resMax = Math.max(...arr1, 300, ...arr2);
console.log(resMax);

const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rigths: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

//const res = Object.assign(user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

const x = 25,
    y = 10;
const coords = {x, y,
    calcSq() {
        console.log(this.x * this.y);
    }
};

console.log(coords);
coords.calcSq();

const user2 = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rigths: 'user',
};

console.log(user2.name);

const {name: {first, second}, pass, rigths} = user2;

console.log(first, second);


function connect({
    host = 'localhost',
    port = 80,
    user = 'default' 
} = {}) {
    console.log (host, port, user);
}

connect();

const numbers2 = [[3, 5], [6, 7]];
//numbers2[0][0]

const [[a2, b2], [c2, d2]] = numbers2;

console.log(a2, b2, c2, d2);

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
};

//country.gender.male[0]
const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;
console.log(maleUnder18, maleAdult, femaleUnder18, femaleAdult);