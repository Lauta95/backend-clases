const array = [
    { id: 1, name: 'Eri Alfonso' },
    { id: 2, name: 'Augusto Crack' },
    { id: 3, name: 'Christian Welcome' },
    { id: 4, name: 'Francisco Perez' }
]

let student = array.find((est) => {
    let found = est.id === 2;
    console.log("valor de found", found);
    return found
})

// una manera de hacer código mas limpio es con una función flecha y pasandole el valor directamente.
let student2 = array.find(e => e.id === 3)

console.log(student);
console.log(student2);