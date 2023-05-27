const obj1 = {
    field11: 222,
    field22: 'Romina',
    field33: true,
    field44: 'Agustin Sivila',
    field66: 666
}

const obj2 = {
    field1: '[Tutor] Santiago',
    field2: [2, 3, 4, 6, 7]
}


// Spread operator
const {field22} = obj1;
console.log(field22);
// saca y pone en una constante

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj4 = {
    field111: 222,
    field222: 'R2',
    field333: false,
    field444:'Marco Giabbani',
    field666: 666
}
console.log('-----------');
// rest operator 
const {field111, ...rest} = obj4;
console.log(field111);
console.log(rest);