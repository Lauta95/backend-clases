
import ToyService from "../services/toy.service.js";

const toyService = new ToyService()

export const getAll = (req, res) => {
    res.json(ToyService.getAll())
}

export const getCheapest = (req, res) => {
    res.json(toyService.getCheapest())
}

export const create = (req, res) => {
    const data = req.body

    res.json(toyService.create(data))
}