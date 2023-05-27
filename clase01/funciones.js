function miNombre(name, lastName) {
    let varInterna = 127
    console.log('saludos a mi amigo', name);
    return varInterna
}

console.log('INIT');
const valorRetorno = miNombre('andres galtan')
console.log(valorRetorno);

console.log('-----------');

// uso de función flecha
const saludar = (name, age) => {
    console.log('saludos para', name);
    return age * 2
}

const t = saludar('lautaro', 27)
console.log(t);

console.log('-----------');
const a = o => o * 23

console.log(a(23));