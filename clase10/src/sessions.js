import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: 'paraFirmarElIDEnElBrowser',
    resave: true, //para mantener la sesión activa
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    const name = req.session.name || req.query.name
    console.log(req.session);
    if(req.session.counter) {
        req.session.counter++
        return res.send(`Visitaste la página ${name} ${req.session.counter}`)
    }
    req.session.name = name

    req.session.counter = 1



    res.send(`Te damos la bienvenida ${name} ${req.session.counter}`)

})
app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        return res.send(`Se ha visitado el sitio ${req.session.counter}`)
    }
    req.session.counter = 1
    res.send('welcome!')
})

const DB = [
    {
        username: 'lautaro',
        password: 'secret',
        rol: 'admin'
    }
]

app.get('/login', (req, res) => {
    const { username, password } = req.query
    const user = DB.find(u => u.username === username && u.password === password)
    if (!user) return res.send('invalid credentals')

    req.session.user = user

    res.send('login success!')
})

function authentication(req, res, next) {
    if (req.session?.user) return next()
    // si el usuario no existe se usa ? para que salte el error
    return res.status(401).send('authentication error')
}

app.get('/private', authentication, (req, res) => {
    res.send('esta pagina la puede ver la persona logueada' + JSON.stringify(req.session))
})

app.listen(8080)