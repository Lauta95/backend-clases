import { Router } from 'express';
import { generateToken, authToken } from '../utils.js';

const usersDB = [
    { email: 'lauta@gmail.com', password: '123', name: 'lauta' }
]
const router = Router()

router.post('/register', (req, res) => {
    const user = req.body
    if (usersDB.find(u => u.email === user.email)) {
        return res.status(400).send('user already exists')
    }
    usersDB.push(user)
    const access_token = generateToken(user)
    res.cookie('Tokenn', access_token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({message: 'logged in!!!!'})
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = usersDB.find(u => u.email === email && u.password === password)
    if (!user) return res.status(401).send({ status: 'error', error: 'invalid pass' })

    const access_token = generateToken(user)
    res.cookie('Tokenn', access_token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send('logged inn!')
})

router.get('/current', authToken, (req, res) => {
    res.send({ status: 'success', payload: req.user })
})

export default router