import TicketDTO from '../DTO/tickets.dto.js'

export default class TicketRepository {
    constrcutor(dao) {
        this.dao = dao
    }
    get = async () => { return this.dao.get() }
    getByID = async (id) => { return this.dao.getByID(id) }
    create = async (data) => {
        const dataToInsert = new TicketDTO(data)
        return this.dao.create(dataToInsert)
    }

}