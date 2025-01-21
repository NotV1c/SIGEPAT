const mysql = require('../config/config');
const db = require ('../config/config');
const User = {};
User.create = (user, result) => {
    const sql =`INSERT INTO paciente ( nombre, idDoc, numDoc, numCama, numRegistro, tipoSangre, peso, estatura, fechaNac, contrasena )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        sql,
        [
            user.nombre,
            user.idDoc,
            user.numDoc,
            user.numCama,
            user.numRegistro,
            user.tipoSangre,
            user.peso,
            user.estatura,
            user.fechaNac,
            new Date()
        ],
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo Paciente: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
};

User.findAll = (limit, offset, result) => {
    let sql = `SELECT * FROM paciente`;
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
}

User.findById = (id, result) => {
    db.query(`SELECT * FROM paciente WHERE idPaciente = ${id}`, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;