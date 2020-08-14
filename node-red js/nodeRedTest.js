"use strict";


let ts = [],
    val1 = [],
    val2 = [];

const data = [{
    ts: 1,
    val: 2
}, {
    ts: 2,
    val: 3
}];
const obj = {

};

const var0 = {
    alm: {
        1: false,
        2: true
    }
};
let a = '';
for (let key in var0.alm) {
    if (var0.alm[key] && var0.alm != ) {
        a = {
            "chatId": 367149127,
            "type": "message",
            "content": `Alarm var0 - ${key}`
        };
        console.log(a);
    } else {
        a = 'err';
    }
}
console.log(a);


data.forEach((item, i) => {
    ts[i] = item.ts;
});

console.log(ts);