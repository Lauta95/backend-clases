import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'clase10_02'

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + 'views')
app.set('view engine', 'handlebars')

app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName,
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

app.get('/', (req, res) => res.send(`<h1>ok</h1>`))

mongoose.connect(uri, { dbName })
    .then(() => {
        console.log('connected');
        app.listen(8080, () => ('listening...'))
    })