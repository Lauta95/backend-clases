import express from 'express'

const app = express()

app.get('/', (req,res) => res.send('<h1>hola este es mi servicio</h1>'))

app.listen(8080, () => {console.log('listening...')})

