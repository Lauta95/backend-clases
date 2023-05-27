
const dividir = (dividendo, divisor) => {
    // se crea la promesa
    const promesa = new Promise((resolve, reject) => {
        if (divisor == 0) reject('division entre 0 es un error') // si falla, exec reject
        else resolve(dividendo / divisor) // si esta bien, exec resolve
    })
    return promesa;
}

const p1 = dividir(34, 7)

p1
    .then(resultado => console.log('el resultado es', resultado)) //si se resolvio
    .then(otroResult => {
        console.log(otroResult);
        const tt = 7;
        return tt
    })
    // .then(r => {console.log(r)})
    .catch(error => console.error(error)); // si falló

dividir(56, 0)
    .then(resultado => console.log('el resultado es', resultado))
    .catch(error => console.error(error))