const fs = require('fs');

const filename = 'ejemplo.txt';
// escribir archivo
fs.writeFileSync(filename, 'Saludos mi nombre es Lautaro');

if(fs.existsSync(filename)){
    console.log('El archivo existe');

    // leer el contenido
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log('contenido:', contenido);

    // agregar contenido
    fs.appendFileSync(filename, '\nMas saludos para los demas')

    const contenidoNew = fs.readFileSync(filename, 'utf-8')
    console.log('contenido new:', contenidoNew);

    fs.unlinkSync(filename)
}

console.log('end');

