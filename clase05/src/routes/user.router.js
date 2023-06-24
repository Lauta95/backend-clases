import { Router } from 'express';
// es como en app pero en vez de hacerlo para una aplicacion vamos a hacerlo para un router:
const router = Router()
const users = []

router.get('/', (req, res) => {
    res.send({ users })
})

router.get('/user', (req, res) => {
    res.send('devuelve todos los users')
})


router.post('/', (req, res) => {
    const user = req.body
    users.push(user)

    res.send({ status: 'success' })
})


export default router