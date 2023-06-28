const express = require('express');
const dotenv = require('dotenv');

const productosRouter = require('./routes/productos_router.js');
    
const { findOneById, findAll, create, update, borrar } = require("./database/data.manager.js");

const server = express();
dotenv.config();

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Asociar el router de productos a la ruta '/productos'
server.use('/productos', productosRouter);


// Control de rutas inexistentes
server.use('*', (req, res) => {
    res.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peticiones
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/productos`);
});