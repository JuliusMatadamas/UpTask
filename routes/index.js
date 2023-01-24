const express = require('express');
const {request, response} = require("express");
const router = express.Router();
const tasksController = require('../controllers/tasksController');

module.exports = () => {
    router.get('/', tasksController.tasksIndex);
    return router;
}