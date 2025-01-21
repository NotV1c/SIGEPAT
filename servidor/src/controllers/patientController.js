const User = require('../models/patient');

module.exports = {
    
    register(req, res) {
        const user = req.body; //Datos del cliente
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear al paciente',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'Creado el paciente',
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
                        message: 'Error al obtener los pacientes',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Pacientes obtenidos',
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
                        message: 'Error al obtener el paciente',
                        error: err
                    }
                );
            }
            return res.status(202).json(
                {
                    success: true,
                    message: 'Paciente obtenido',
                    data: data
                }
            );
        });
    },
};