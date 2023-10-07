import { UserService } from '../repositories/index.js'

export const get = async (req, res) => {
    try {
        const users = await TicketService.get()
        return res.json({ status: 'success', payload: users })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 'error', error })
    }
}

export const create = async (req, res) => {
    try {
        const user = req.body
        const userNew = await UserService.create(user)
        return res.json({ status: 'success', payload: userNew })
    } catch (error) {
        return res.json({ status: 'errror', error })
    }
}

export const addTicket = async (req, res) => {
    try {
        const { user: userID, ticket: ticketID } = req.query
        const result = await UserService.addTicket(userID, ticketID)
        return res.json({ status: 'success', payload: result })
    } catch (error) {
        console.error(error);
        return res.json({ status: 'error', error })
    }
}