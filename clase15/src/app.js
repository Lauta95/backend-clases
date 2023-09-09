import express from 'express';
import contactsRouter from './routes/contacts.router.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', (req, res) => { res.send('ok') });
app.use('/contacts', contactsRouter);


const URL = "mongodb+srv://freecodecamp-user:fDlfjlzTXxxBhYva@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority"
const dbName = 'clase15'

mongoose.connect(URL, { dbName })
    .then(() => {
        console.log('db connected');
        app.listen(8080, () => {
            console.log('listen...');
        })
    })
    .catch(e => console.error(e))