Array.prototype.myMap2 = function (callback) {
    const newArray = [];

    // este this.length se refiere a la función del Array propiamente dicha.
    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        const newElement = callback(element)
        newArray.push(newElement)
    }
    return newArray
}

const miLista = [1, 2, 3, 4, 88];
// La función creada arriba de todo, el prototipo de array, la puedo utilizar ahora en todos los array de mi código.
const newLista = miLista.myMap2(x => x * 3)
console.log(newLista);