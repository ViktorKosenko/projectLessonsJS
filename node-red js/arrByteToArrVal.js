"use strict";

const objVar = {
    //        adr, type (word - 2byte, [2] = undefined
    //                   bool - 1bit from word, [2] = number bit in word
    //                   float32 - 4byte, [2] = fixed (Decimal Digits)
    //                   char - Stores a single character/letter or ASCII values (UTF-16)
    //                   long - 4byte, [2] = undefined
    //         0,   1,    2
    nameVar1: [0, "word"],
    nameVar2: [1, "bool", 9],
    nameVar3: [2, "long"],
    nameVar4: [4, "char"]
};
//reg:             0        1          2         3         4
const dataArr = ['0x1', '0xF', 0x2, 0x1, 0x4, 0x5, 0x6, 0x7, 0x04, 0x10];

let valVar = {};

for (let key in objVar) {
    valVar[key] = getVal(objVar[key], dataArr);
}

console.log(valVar);

function getSize(nameVar) {
    let size = 0,
        numBit = 16,
        fixed = '';
    switch (nameVar[1]) {
        case 'word':
            size = 2;
            break;
        case 'bool':
            size = 2;
            numBit = nameVar[2];
            break;
        case 'float32':
            size = 4;
            fixed = nameVar[2];
            break;
        case 'char':
            size = 2;
            break;
        case 'long':
            size = 4;
            break;
    }
    return [size, numBit, fixed];
}

function getVal(nameVar, dataArr) {
    let val = 0,
        count = 0;
    const size = getSize(nameVar),
        adr = nameVar[0];
    for (let i = (adr * 2); i < (adr * 2 + size[0]); i++) {
        val = val + (dataArr[i] << ((size[0] * 8 - 8) - (count * 8)));
        count++;
    }
    switch (nameVar[1]) {
        case 'float32':
            val = floatConversion(val, size[2]);
            break;
        case 'char':
            val = String.fromCharCode(val);
            break;
        case 'bool':
            val = Boolean(val & Math.pow(2, size[1]));
            break;
    }
    return val;
}

function floatConversion(data, fixed) {

    if (typeof data === 'number' && (data % 1) === 0) {
        data = data.toString(2);
    }

    if ((typeof data === 'string' || data instanceof String) && data.match("^[01]+$") && data.length <= 32) {

        data = data.length < 32 ? '0'.repeat(32 - data.length) + data : data;
        let sign = (data.charAt(0) == '1') ? -1 : 1,
            exponent = parseInt(data.substr(1, 8), 2) - 127,
            significandBase = data.substr(9),
            significandBin = '1' + significandBase,
            i = 0,
            val = 1,
            significand = 0;

        if (exponent == -127) {
            if (significandBase.indexOf('1') == -1) {
                return 0;
            } else {
                exponent = -126;
                significandBin = '0' + significandBase;
            }
        }

        while (i < significandBin.length) {
            significand += val * parseInt(significandBin.charAt(i));
            val = val / 2;
            i++;
        }

        let floatValue = sign * significand * Math.pow(2, exponent);

        if (fixed) {
            floatValue = floatValue.toFixed(fixed) / 1;
        }
        return floatValue;

    } else {
        return null;
    }
}