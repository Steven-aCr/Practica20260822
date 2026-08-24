const cursoServices = require('../services/cursoService');

exports.crear = async (req, res) => {
    try {
        const resultado = await cursoServices.crearCurso(req.body);
        res.status(201).json(resultado);
    } catch (error) { res.status(400).json({ error: error.message }); }
};

exports.obtenerTodos = async (req, res) => {
    try {
        const resultado = await cursoServices.listarCursos();
        res.status(200).json(resultado);
    } catch (error) { res.status(500).json({ error: error.message }); }
};

exports.obtenerUno = async (req, res) => {
    try {
        const resultado = await cursoServices.buscarCursoPorId(req.params.id);
        if (!resultado) return res.status(404).json({ mensaje: 'Curso no encontrado'});
        res.status(200).json(resultado); 
    } catch (error) { res.status(500).json({ error: error.message}); }
};

exports.actualizar = async (req, res) => {
    try {
        const resultado = await cursoServices.modificarCurso(req.params.id, req.body);
        if(!resultado) return res.status(404).json({ mensaje: 'Curso no encontrado.'});
        res.status(200).json(resultado);
    } catch (error) { res.status(400).json({ error: error.message }); }
};

exports.eliminar = async (req, res) => {
    try {
        const resultado = await cursoServices.removerCurso(req.params.id);
        if (!resultado) return res.status(404).json({ mensaje: 'Curso no encontrado.'});
        res.status(200).json({ mensaje: 'Curso eliminado correctamente.' });
    } catch (error) { res.status(500).json({ error: error.message }); }
};