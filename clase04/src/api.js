import express from 'express'

const app = express()
app.use(express.json())

let users = []

app.get('/api/user', (req, res) => {
    res.json(users)
})

app.post('/api/user', (req, res) => {
    const user = req.body

    users.push(user)
    res.status(201).json({ status: 'success', message: 'user created' })
})

app.put('/api/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = req.body

    const userIdx = users.findIndex(u => u.id === id)
    if (userIdx < 0) {
        return res.status(404).json({ status: "error", message: "user not found" })
    }

    users[userIdx] = user
    res.json({ status: "success", message: "actualizado" })

})

app.delete('/api/user/:id', (req, res) => {
    const id = parseInt(req.params)
    const userIdx = users.findIndex(u => u.id === id)
    if (userIdx < 0) {
        return res.status(404).json({ status: "error", message: "user not found" })
    }
    // quitamos de la lista el usuario con ese id
    users = users.filter(u => u.id !== id)
    res.send({ status: "success", message: "user deleted" })
})

app.listen(8080)