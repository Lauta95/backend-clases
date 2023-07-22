import express from 'express';
import userModel from './models/user.model.js';
import mongoose from 'mongoose';

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({ result: 'success', playload: users })
    } catch (error) {
        console.error(error);
        res.send({ result: 'error', error })
    }
})

//insertar user
app.post('/', async(req,res)=>{
    const result = await userModel.create(req.body)

    res.send({status: 'success', playload: result})
})
// mongodb+srv://freecodecamp-user:<password>@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority
const URL = "mongodb+srv://freecodecamp-user:fDlfjlzTXxxBhYva@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL, {
    dbName: 'clase08_db'
})
    .then(() => {
        console.log('db connected');
        app.listen(8080)
    })
    .catch(e => {
        console.log("can't connect to db");
    })