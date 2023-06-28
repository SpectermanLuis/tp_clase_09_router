const express = require("express");
// const { findOneById, findAll, create, update, borrar } = require("./database/data.manager.js");
const dotenv = require('dotenv');


dotenv.config();
const server = express();

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const productosRouter = require('./routes/productosRouter');

// Asociar el router de usuarios a la ruta '/usuarios'
server.use('/productos', productosRouter);


// Control de rutas inexistentes
server.use('*', (req, res) => {
    res.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peticiones
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/productos`);
});