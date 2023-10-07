import { TicketService } from '../repositories/index.js'

export const get = async (req, res) => {
    try {
        const tickets = await TicketService.get()
        return res.json({ status: 'success', payload: tickets })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 'error', error })
    }
}

export const create = async (req, res) => {
    try {
        const ticket = req.body
        const ticketNew = await TicketService.create(ticket)
        return res.json({ status: 'success', payload: ticket })
    } catch (error) {
        return res.json({status: 'errror', error})
    }
}