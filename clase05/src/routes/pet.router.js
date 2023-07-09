import { Router } from 'express'

const router = Router()
const pets = []

router.get('/', (req, res) => {
    res.send({ pets })
})

router.post('/', (req, res) => {
    const pet = req.body
    const file = req.file
    console.log('file', file);
    if(!file){
        // en caso de no existir el archivo se manda el error 400, y manda de estado con el error image not saved
        return res.status(400).send({ status: 'error', error: 'image not saved'})
    }
    pets.push(pet)

    res.send({ status: 'succes' })
})

export default router