const { Router } = require('express');

const SharingController = require('./controllers/SharingController');
const GeneratePdfController = require('./controllers/GeneratePdfController');

const routes = Router();

routes.get('/news', SharingController.index);
routes.post('/news', SharingController.store);

routes.delete('/news', SharingController.delete);

routes.post('/pdf', GeneratePdfController.create);

module.exports = routes;