
// calculadora positiva con promesas

// debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo

const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) reject('Operacion innecesaria')
        else if (num1 < 0 || num2 < 0) reject('no admito negativos')
        else resolve(num1 + num2)
    })
}

const restar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) return reject('Operacion innecesaria')
        const result = num1 - num2
        if (result < 0) return reject('no admito negativos')

        return resolve(result)
    })
}

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (result < 0) return reject('no admito negativos')
        else resolve(num1 * num2)
    })
}

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) reject('no admito negativos')
        if (divisor == 0) return reject('division entre 0 no es posible')
        return resolve(dividendo / divisor)
    })

}

sumar(12, 34)
    .then(result => console.log(result))
    .catch(e => console.log(e))
restar(12, 34)
    .then(result => console.log(result))
    .catch(e => console.log(e))
multiplicar(12, 34)
    .then(result => console.log(result))
    .catch(e => console.log(e))
dividir(12, 34)
    .then(result => console.log(result))
    .catch(e => console.log(e))

// async await

const funcAsync = async() => {
    try{
        console.log(await sumar());
        console.log(await restar());
        console.log(await multiplicar());
        console.log(await dividir());
    } catch(error){
        console.log('Error', error);
    }
}
funcAsync()