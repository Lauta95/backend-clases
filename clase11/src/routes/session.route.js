import UserModel from '../model/user.mode.js'
import { Router } from 'express'
import { createHash, isValidPassword } from '../utils.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('ok')
})
//url para render
router.get('/login', (req, res) => {
    res.render('login', {})
})
router.get('/register', (req, res) => {
    res.render('register', {})
})
//iniciar session
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    //buscar por email
    const user = await UserModel.findOne({ email, password })
    if (!user) {
        console.log('usuario no encontrado');
        return res.redirect('/login')
    }
    // validamos por contraseña
    if (!isValidPassword(user, password)) { //validar hash
        console.log('password not valid');
        return res.redirect('/login')
    }


    req.session.user = user
    return res.redirect('/profile')
})
//registro

router.post('/register', async (req, res) => {
    const data = req.body
    data.password = createHash(data.password) //hashing

    const result = await UserModel.create(data)
    console.log(result);

    res.redirect('/login')
})
//profile
function auth(req, res, next) {
    if (req.session?.user) next()
    else res.redirect('/login')
}
router.get('/profile', auth, (req, res) => {
    const user = req.session.user
    res.render('profile', user)
})

export default router