// ROUTER

const express = require("express");
const routes = express.Router();

const { findOneById, findAll, create, update, borrar } = require("../database/data.manager.js");

// Traer todos los productos
routes.get('/', (req, res) => {
    findAll()
        .then((productos) => res.status(200).send(productos))
        .catch((error) => res.status(400).send(error.message));
});

// Traer un producto determinado por id
routes.get('/:id', (req, res) => {
    const { id } = req.params;

    findOneById(Number(id))
        .then((producto) => res.status(200).send(producto))
        .catch((error) => res.status(400).send(error.message));
});

// Crear un producto nuevo
routes.post('/', (req, res) => {
    const { rubro, descripcion, precio,stock } = req.body;

    create({ rubro,descripcion,precio: Number(precio), stock: Number(stock) })
        .then((producto) => res.status(201).send({status:'Alta ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

// Actualizar un producto existente
routes.put('/:id', (req, res) => {
    const { id } = req.params;
    const { rubro,descripcion,precio,stock } = req.body;

    update({ id: Numbcer(id), rubro,descripcion,precio: Number(precio), stock: Number(stock) })
        .then((producto) => res.status(200).send({status:'Actualizacion ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

// Borrar un producto existente
routes.delete('/:id', (req, res) => {
    const { id } = req.params;

    borrar(Number(id))
        .then((producto) => res.status(200).send({status:'Borrado ok',producto}))
        .catch((error) => res.status(400).send(error.message));
});

module.exports = routes; 