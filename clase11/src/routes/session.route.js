import UserModel from '../model/user.model.js'
import { Router } from 'express'
import passport from 'passport'
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
router.post('/login', passport.authenticate('login', '/login'), async (req, res) => {

    if (!req.user) return res.status(400).send('invalid credentials')
    req.session.user = req.user

    return res.redirect('/profile')
})

//registro
router.post(
    '/register',
    passport.authenticate('register', { failureRedirect: '/register', }),
    async (req, res) => {
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