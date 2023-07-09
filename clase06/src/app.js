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

    socket.on('message', data => {
        console.log(data);
        // solo emite para una sola persona (con el boton):
        socket.emit('message_ind', 'solo le llega al conectado')
        // le llega a todos los que están conectados meonos al socket actual:
        socket.broadcast.emit('msn_rest', 'Todos ven este mensaje, menos el actual')
        // lo ven todos:
        socketServer.emit('msn_all', data)
    })
})
