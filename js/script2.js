"use strict";
// урок 2.14

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

let num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!'): console.log('Error');

switch (num) {
    case 49:
        console.log('Yes');
        break;
    default:
        console.log('No!');
}

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
}
while (num > 50);

for (let i = 1; i < 8; i++) {
        if (i === 6){
      //  break;
      continue;
    }
    console.log(i);
}
