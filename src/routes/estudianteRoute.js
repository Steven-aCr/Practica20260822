const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

router.post('/', estudianteController.crear);
router.get('/', estudianteController.obtenerTodos);
router.get('/:id', estudianteController.obtenerUno);
router.put('/:id', estudianteController.actualizar);
router.delete('/:id', estudianteController.eliminar);

module.exports = router;