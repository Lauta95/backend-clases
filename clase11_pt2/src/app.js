import express from 'express'
import __dirname from './utils.js'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import userRouter from './routes/session.route.js'
import initializePassport from './config/passport.config.js'
import passport from 'passport'
import jwtRouter from './routes/jwt.router.js'

const app = express()
const URL = "mongodb+srv://freecodecamp-user:fDlfjlzTXxxBhYva@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority"
const dbName = 'clase11'

app.use(express.json())
//data for post
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


//session mongo
app.use(session({
    store: MongoStore.create({
        mongoUrl: URL,
        dbName,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 15
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// passport
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/jwt', jwtRouter)

mongoose.connect(URL, { dbName })
    .then(() => {
        console.log('db connected');
        app.listen(8080, () => {
            console.log('listen...');
        })
    })
    .catch(e => console.error(e))