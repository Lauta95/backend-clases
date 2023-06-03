
const fs = require('fs')

const obj = {
    name: 'Lautaro',
    lastname: 'Sanabria',
    age: 28
}
// 
const objStr = JSON.stringify(obj)
fs.writeFileSync('objeto.json', objStr)

const contenido = fs.readFileSync('objeto.json', 'utf-8')
console.log('contenido', contenido);

contenido.name = 'Modificado'

console.log('nuevo contenido', contenidoObj);

// COPIAR DE REPO