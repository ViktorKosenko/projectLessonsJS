'use strict';
//3.49

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
 //   basis = basis || 2; - старый вариант
    console.log(number * basis);
}

calcOrDouble(3);