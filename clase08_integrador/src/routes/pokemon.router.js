import { Router } from 'express';
import pokeModel from '../models/pokemon.model.js';

const router = Router();

// listar
router.get('/', async (req, res) => {
    const pokemons = await pokeModel.find().lean().exec()
    res.render('list', { pokemons })
})
// pagina para crear(render html) trae el formulario
router.get('/create', async (req, res) => {
    res.render('create', {})
})
// crear pokemon POST:
router.post('/create', async (req, res) => {
    const pokemonNew = req.body
    console.log({ pokemonNew });

    const pokemonGenerated = new pokeModel(pokemonNew)
    await pokemonGenerated.save()

    console.log(pokemonGenerated);

    res.redirect('/pokemon/' + pokemonGenerated.name)
})
// borrar
router.get('/delete/:id', async (req, res) => {
    const id = req.params.id

    await pokeModel.deleteOne({ _id: id })
    res.redirect('/pokemon')
})
// crear uno
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const pokemon = await pokeModel.findOne({id})
    res.render('one', pokemon)
})


export default router