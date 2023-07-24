import { Router } from 'express';

const router = Router();

// listar
router.get('/', async (req, res) => {
    res.render('list', {})
})
// pagina para crear

// crear uno

// obtener uno con su nombre

// borrar

export default router