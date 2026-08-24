const express = require('express');
const estudianteRoutes = require('./routes/estudianteRoute');
const cursoRoutes = require('./routes/cursoRoutes');

const app = express();

app.use(express.json());

app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/cursos', cursoRoutes);

module.exports = app;