const express = require('express');
const controllers = require('../controllers/mainController');
let mainRouter = express.Router();

mainRouter.get('/', controllers.index);

module.exports = mainRouter;