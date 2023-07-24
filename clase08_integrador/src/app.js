import express from 'express';
import handlebars from 'express-handlebars'
import pokeRouter from './routes/pokemon.router.js'
import __dirname from './utils.js'

const app = express();

app.use(express.json())

// carpeta publica
app.use('/public', express.static(__dirname + '/public'))

// para definir los handlebars son estas 3 lineas:
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/pokemon', pokeRouter)
app.get('/', (req, res) => res.send('it works'))

const server = app.listen(8080, () => console.log('listening...'))
server.on('error', e => console.error(e))