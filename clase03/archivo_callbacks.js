const fs = require('fs')

const filename = 'ejemplo.txt'
// la diferencia con el anterior es que es asincronica  
fs.writeFile(filename, 'saludos a Lautaro Sanabria', (error) => {
    console.log('genero algun error?', error);
})

console.log('fin');