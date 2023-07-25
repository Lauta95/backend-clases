import { Router } from 'express';
import pokeModel from '../models/pokemon.model.js';

const router = Router();

// listar
router.get('/', async (req, res) => {
    const pokemons = await pokeModel.find().lean().exec()
    res.render('list', {pokemons})
})
// pagina para crear(render html) trae el formulario
router.get('/create', async (req, res) => {
    res.render('create', {})
})
// crear pokemon POST:
router.post('/create', async(req,res)=>{
    const pokemonNew = req.body
    console.log({pokemonNew});
    
    const pokemonGenerated = new pokeModel(pokemonNew)
    await pokemonGenerated.save()

    console.log(pokemonGenerated);

    res.redirect('/pokemon/' + pokemonGenerated.name)
})
// crear uno
router.get('/:name', async (req, res) => {
    const name = req.params.name
    res.render('one', {name: 'pikachu'})
})
// obtener uno con su nombre

// borrar

export default router