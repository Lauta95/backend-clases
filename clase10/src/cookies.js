import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('My Cookies ')
})

app.get('/set', (req, res) => {
    res
        .cookie('cookieLau', 'hola mi nombre es lauta', { maxAge: 3000 })
        .cookie('cookieForever', 'forever and ever!')
        .send('cookie seteada')
})

app.get('/get', (req, res) => {
    const cookie = req.cookies
    console.log(cookie);

    res.send('se ha leído la cookie')
})

app.get('/delete', (req, res) => {
    res.clearCookie('cookieForever').send('cookie borrado')
})

app.listen(8080)