import contactsModel from "./models/contacts.model"

export default class Contacts {
    constructor() {

    }

    get = async () => {
        const contacts = await contactsModel.find()
        return contacts
    }

    insert = async () => {
        const result = await contactsModel.create(data)
        return result
    }
}