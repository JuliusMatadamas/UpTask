const express = require('express');
const {request, response} = require("express");
const router = express.Router();

module.exports = () => {
    router.get('/', (request, response) => {
        response.send('Hola mundo');
    });

    router.get('/nosotros', (request, response) => {
        response.send('Mostrar nosotros');
    });

    return router;
}