import express from 'express'
import ticketRouter from './routes/ticket.routes.js'
import userRouter from './routes/users.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(8080, )