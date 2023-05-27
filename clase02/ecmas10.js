// trim

const saludos = '    Hola, saludos Lautaro';

console.log(saludos.trim());

const mensajes = [];
const mensajes1 = ' holaa      ';
const mensajes2 = '        ';
const mensajes3 = 'no           ';

function addMessage(msn) {
    if(msn.trim() != '') mensajes.push(msn)
}

addMessage(mensaje1)
addMessage(mensaje2)
addMessage(mensaje3)

console.log(mensajes);
