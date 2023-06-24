import express from 'express';
import usersRouter from './routes/user.router.js'
import petsRouter from './routes/pet.router.js'

const app = express();
app.use(express.json())
app.use(express.static('./src/public'));
// esto es porque estamos usando req.body en el router

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/health', (req,res)=> res.send('ok'))

app.listen(8080); 