const { Router } = require('express');

const router = Router(); //routes

const userController = require('../controllers/userController');

router.post('/usuarios', userController.register);
router.get('/usuarios', userController.getAll);
router.get('/usuarios/:id', userController.getById);
router.post('/usuarios/login', userController.login);

module.exports = router;