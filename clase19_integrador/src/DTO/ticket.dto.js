export default class TicketDTO {
    constructor(ticket) {
        this.id = ticket.id || ticket._id || null
        this.name = ticket.name
        this.code = ticket.code
        this.description = ticket.description || ''
    }
}