
import { Router } from "express";
import { getAll, create } from "../controllers/toy.controller.js"

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.post('/create', create)

export default router