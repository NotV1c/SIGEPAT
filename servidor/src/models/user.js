const mysql = require('../config/config');
const db = require ('../config/config');
const User = {};
User.create = (user, result) => {
    const sql =`INSERT INTO usuario (nombre, rol, idDoc, numDoc, contrasena)
    VALUES (?, ?, ?, ?, ?)`;
    
    db.query(
        sql,
        [
            user.nombre,
            user.rol,
            user.idDoc,
            user.numDoc,
            user.contrasena,
            new Date()
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo Usuario: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
};

User.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM usuario`;
    if (limit != null && offset != null) {
        sql = sql.concat(`LIMIT ${limit} OFFSET ${offset}`);
    }

    console.log('sql: ', sql); //add only for debug

    db.query(sql, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findById = (id, result) => {
    db.query(`SELECT * FROM usuario WHERE idUsuario = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.login = (user, result) => {
    const sql = 'SELECT idUsuario AS ID, nombre, rol FROM usuario WHERE numDoc = ? and contrasena = ? UNION SELECT idPaciente AS ID, nombre, "Paciente" AS rol FROM paciente WHERE numDoc = ? and contrasena = ?;';
    db.query(sql, [user.numDoc, user.contrasena, user.numDoc, user.contrasena], (err, res) => {

        if (err) {
            console.log('error: ', err);
            result(err, null);
        }

        else {
            if (res.length > 0){
                result(null, res[0])
            }

            else{
                result(null, { id: 0 })
            }
        }
    });
};

module.exports = User;