import express from 'express'

const app = express()

app.get('/saludo', (req,res) => {
    res.send(`saludos a `)
})
app.get('/saludo/:nombre', (req,res) => {
    console.log(req.params)
    const nombre= req.params.nombre
    res.send(`saludos a ${nombre}`)
})

app.listen(8080)