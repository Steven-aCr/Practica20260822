const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log('Capa de datos: Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error critico de conexion al DB: ', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;