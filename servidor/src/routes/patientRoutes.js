const { Router } = require('express');

const router = Router(); //routes

const patientController = require('../controllers/patientController');

router.post('/pacientes', patientController.register);
router.get('/pacientes', patientController.getAll);
router.get('/pacientes/:id', patientController.getById);

module.exports = router;