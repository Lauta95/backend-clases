import express from 'express'
import { Server } from 'socket.io'
import __dirname from './utlis.js'


const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('<h1>hola</h1>')
})

// va a ser nuestra caracteristica de nuestro servidor http
const httpServer = app.listen(8080)
// para crear un socket basado en este http
const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    console.log('nuevo cliente conectado');

    socket.on('message', data=>{
        console.log(data);

        socket.emit('message_ind', 'mensaje recibido desde el backend')
    })
})
