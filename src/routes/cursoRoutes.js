const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.post('/', cursoController.crear);
router.get('/', cursoController.obtenerTodos);
router.get('/:id', cursoController.obtenerUno);
router.put('/:id', cursoController.actualizar);
router.delete('/:id', cursoController.eliminar);

module.exports = router;