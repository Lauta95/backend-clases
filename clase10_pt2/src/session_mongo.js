import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'

const app = express()

const URL = "mongodb+srv://freecodecamp-user:fDlfjlzTXxxBhYva@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL, {
    dbName: 'clase10_pt2'
})

app.use(session({
    store: MongoStore.create({
        mongoUrl: URL,
        dbName: 'sessions',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 100
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => res.send('ok'))
app.get('/login', (req, res) => {
    if (req.session.user) return res.send('already logged')

    const { username } = req.query
    if (!username) return res.send('need an username')

    req.session.user = username
    return res.send('login success')
})

function auth(req, res, next) {
    return req.session?.user ? next() : res.status(401).send('auth error')
}
app.get('/private', auth, (req, res) => { res.send(`private page ${req.session.user}`) })

app.listen(8080, () => console.log('listening..'))