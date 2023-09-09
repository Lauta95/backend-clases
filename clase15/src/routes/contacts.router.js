import { Router } from "express";
import Contacts from "../DAO/memory/contacts.memory.js";
// import Contacts from "../DAO/files/contacts.files.js";
// import Contacts from "../DAO/mongo/contacts.mongo.js"

const router = Router();
const contactsDAO = new Contacts();

router.get('/', async (req, res) => {
    const result = await ContactsDAO.get()
    res.send({ status: 'success', payload: result })
});

router.post('/', async (req, res) => {
    const contact = req.body
    const result = await contactsDAO.inser(contacts)
    res.send({ status: 'success', payload: result })
});

export default router;