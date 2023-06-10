
import express from 'express'

const app = express()

app.get('/saludo', (request, response)=> {
    // contenido estático porque se renderiza en el servidor
    const html = '<h1 style="color: blue;">hola a todos. bienvenidos.</h1>'
    response.send(html)
})

app.get('/usuario', (request, response)=> {
    // 
    const html = {nombre: 'Lautaro', apellido: 'Sanabria', edad: 28, correo: 'correo@gmail.com'}
    response.json(html)
})

app.listen(8080, ()=> console.log('corriendo en el puerto 8080'))

// para correr los scripts en package.json usar npm run + nombre del script