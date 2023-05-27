// mostrar lista va a recibir un arreglo como parametro.
// si la lista está vacía devolver el mensaje lista vacía
// si no, mostrarlo uno por uno

const mostrarLista = array => {
    console.log('------------------');
    // cuando es una sola linea no es necesario colocar las llaves
    if (array.length == 0) return 'Lista vacía.'

    array.forEach(element => {
        console.log(element);
    });

    return `La longitud del array es ${array.length}`
}

console.log(mostrarLista([1, 2, 3]));
console.log(mostrarLista([]));
console.log(mostrarLista(['holaa', 'Lautaro', 27]));