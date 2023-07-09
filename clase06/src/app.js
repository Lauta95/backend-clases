import express from 'express'
import __dirname from './utlis'

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req,res)=>{
    res.send('<h1>hola</h1>')
})

app.listen(8080)