import { Router } from 'express';
import pokeModel from '../models/pokemon.model.js';

const router = Router();

// listar
router.get('/', async (req, res) => {
    res.render('list', {})
})
// pagina para crear(render html) trae el formulario
router.get('/create', async (req, res) => {
    res.render('create', {})
})
// crear pokemon POST:
router.post('/create', async(req,res)=>{
    // 
})
// crear uno
router.get('/:name', async (req, res) => {
    const name = req.params.name
    res.render('one', {name: 'pikachu'})
})
// obtener uno con su nombre

// borrar

export default router