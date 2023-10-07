import UserDTO from '../DTO/users.dto.js'
import { TicketService } from './index.js'

export default class UserRepository {
    constrcutor(dao) {
        this.dao = dao
    }
    get = async () => { return this.dao.get() }
    getByID = async (id) => { return this.dao.getByID(id) }
    create = async (data) => {
        const dataToInsert = new UserDTO(data)
        return this.dao.create(dataToInsert)
    }
    addTicket = async (userID, ticketID) => {
        const user = await this.dao.getByID(userID)
        if (!user) throw new Error('user not found')
        if (!(await TicketService.getByID(ticketID))) throw new Error('ticket not found')
        user.ticket.push(ticketID)
        return this.dao.update(user)
    }
}