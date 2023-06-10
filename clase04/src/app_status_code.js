import express from 'express'
const app = express()

app.get('/api/products', (req, res) => {
    res.status(200).send('Lista de productos .. []')
})

app.post('/api/products', (req, res) => {
    res.status(200).send('crear el producto .. {}')
})
// put es editar
app.put('/api/products', (req, res) => {
    res.status(200).send('actualizar el producto .. {}')
})

app.delete('/api/products', (req, res) => {
    res.status(200).send('borrar el producto .. {}')
})

app.listen(8080)