import { Router } from "express";
import {get, create, addTicket} from '../controllers/user.controller.js'

const router = Router()

router.get('/', get)
router.post('/', create)
router.put('/add', addTicket)

export default router