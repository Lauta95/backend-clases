import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {
    // todo lo que el usuario envia al servidor se encuentra en esta variable
    console.log(req.query);
    const edad = req.query.edad
    res.send('quiero saber tu edad')
})

app.listen(8080)