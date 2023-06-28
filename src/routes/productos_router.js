const express = require("express");

// const Router = require("express");
// const routes = Router();

const express = require('express');
const router = express.Router();


// Traer todos los productos
router.get('/', (req, res) => {
    findAll()
        .then((productos) => res.status(200).send(productos))
        .catch((error) => res.status(400).send(error.message));
});

// Traer un producto determinado por id
server.get('/productos/:id', (req, res) => {
    const { id } = req.params;

    findOneById(Number(id))
        .then((producto) => res.status(200).send(producto))
        .catch((error) => res.status(400).send(error.message));
});

// Crear un producto nuevo
server.post('/productos', (req, res) => {
    const { rubro, descripcion, precio,stock } = req.body;

    create({ rubro,descripcion,precio: Number(precio), stock: Number(stock) })
        .then((producto) => res.status(201).send({status:'Alta ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

// Actualizar un producto existente
server.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { rubro,descripcion,precio,stock } = req.body;

    update({ id: Number(id), rubro,descripcion,precio: Number(precio), stock: Number(stock) })
        .then((producto) => res.status(200).send({status:'Actualizacion ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

// Borrar un producto existente
server.delete('/productos/:id', (req, res) => {
    const { id } = req.params;

    borrar(Number(id))
        .then((producto) => res.status(200).send({status:'Borrado ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

// Control de rutas inexistentes
server.use('*', (req, res) => {
    res.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de peticiones
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/productos`);
});