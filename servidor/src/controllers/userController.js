const User = require('../models/user');

module.exports = {
    
    register(req, res) {
        const user = req.body; //Datos del cliente
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear el usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Creado el usuario',
                data: data //Id del usuario creado
            });
        });
    },

    getAll(req, res) {
        const limit = req.query.limit || null;
        const offset = req.query.offset || null;

        User.findAll(limit, offset, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener los usuarios',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Usuarios obtenidos',
                    data: data
                }
            );
        });
    },
    
    getById (req, res) {
        const id = req.params.id;
        User.findById(id, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al obtener el usuario',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Usuario obtenido',
                    data: data
                }
            );
        });
    },

    login (req, res) {
        const user = req.body;
        User.login(user, (err, data) => {
            if (err) {
                return res.status(501).json(
                    {
                        success: false,
                        message: 'Error al iniciar sesion',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Inicio de sesion exitoso',
                    data: data
                }
            );
        });
    },
};