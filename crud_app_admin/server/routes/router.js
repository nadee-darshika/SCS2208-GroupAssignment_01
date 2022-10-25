const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add doctors
 *  @method GET /add-doctor
 */
route.get('/add-doctor', services.add_doctor)

/**
 *  @description for update doctor
 *  @method GET /update-doctor
 */
route.get('/update-doctor', services.update_doctor)


// API
route.post('/api/doctor', controller.create);
route.get('/api/doctor', controller.find);
route.put('/api/doctor/:id', controller.update);
route.get('/api/doctor-delete/:id', controller.delete);


module.exports = route