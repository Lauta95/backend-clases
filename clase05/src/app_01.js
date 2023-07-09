import express from 'express';
import usersRouter from './routes/user.router.js'
import petsRouter from './routes/pet.router.js'
import multer from 'multer'
import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(express.json())
app.use('/static', express.static('./src/public'))
// esto es porque estamos usando req.body en el router
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, __dirname + '/src/public/')

    },
    filename: (req, file, callback) => {
        callback(null, file)
    },
})
const uploader = multer({ storage })
// html:
app.use('/static', express.static('./src/public'))
// --
app.use('/api/users', usersRouter)
// primero va el path despues el middleware y despues la ruta
app.use('/api/pets', uploader.single('file'), petsRouter)
app.use('/health', (req, res) => res.send('ok'))

app.listen(8080); 
