import express from 'express'
import { addLoggerHttp } from './utils/logger'

const app = express()

app.use(addLoggerHttp)

app.get('/test', (req, res) => res.send('logger testingtg'))
app.get('/', (req, res) => res.send('logger testingtg '))
app.post('/', (req, res) => res.send('logger testing post'))

app.listen(8080, () => console.log('listening'))