const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) return reject('division entre 0 no es posible')
        resolve(dividendo / divisor)
    })
}

const functionAsincronico = async () => {
    try {
        const resultado = await dividir(10, 5)
            .then(resultado => console.log('el resultado es', resultado)) //si se resolvio
            .then(otroResult => {
                console.log(otroResult);
                const tt = 7;
                return tt
            })
            .then(r => { console.log(r) })
            .then(r => console.log(r))
        const resultado2 = await dividir(100, 2)

        console.log(resultado, resultado2);
    } catch (e) {
        console.log('se ejecuto un error: ', e);
    }

}

functionAsincronico();