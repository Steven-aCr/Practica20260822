const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const estudianteRoutes =
    require('./routes/estudianteRoute');

const cursoRoutes =
    require('./routes/cursoRoutes');

const usuarioRoutes =
    require('./routes/usuarioRoutes');

const app = express();

// Configuración de CORS
const allowedOrigins = (process.env.CLIENT_URL || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

const corsOptions = {
    origin: (origin, callback) => {
        // Permite herramientas sin Origin, como Postman
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`Origen no permitido por CORS: ${origin}`));
    },

    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'x-use-cookie'
    ],

    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Registro de Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/cursos', cursoRoutes);

module.exports = app;