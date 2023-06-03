const fs = require('fs');

const filename = 'ejemplo.txt'

const operacionAsync = async () => {
    try {
        await fs.promises.writeFile(filename, 'hola estoy haciendo una promse asincrona')
        let contenido = await fs.promises.readFile(filename, 'utf-8')
        console.log('contenido:', contenido);
    } catch (e) {
        console.log('ERROR', e);
    }

}

operacionAsync()
console.log('fin');