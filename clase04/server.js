const http = require('http')
// con node pero sin express. Express esta construido en base a http.
const server = http.createServer((request, response) => {
    console.log('se recibio un requesttt');
    response.end('mi primer hola mundo desde el backend con LAUTARO')

})

server.listen(8080, () =>{
    console.log('el servidor está corriendo y escuchando en el puerto 8080..');
})

// para entrar, hay que abrirlo en el navegador con la ip 120.0.0.1:80808 o localhost:8080