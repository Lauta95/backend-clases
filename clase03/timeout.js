const temporizador = (callback) => {
    setTimeout(() => {
        callback()
    }, 5000)
}

const operacion = () => console.log('booom');

console.log('tik tik');

temporizador(operacion)

console.log('finalizamos el proceso');

// setTimeout: se declara una funcion flecha y se ejecuta el callback adentro. Ahora se pasa una misma y se ejecuta.

