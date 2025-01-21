const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


/** Settings */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


/** Middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


/** Routes */
app.get('/', (req, res) => {
    res.json('SIGEPAT');
});
app.use(require('./routes/userRoutes'));
app.use(require('./routes/patientRoutes'));


/** Inicializar el servidor */
app.listen(3000, () => {
    console.log( `Server is running on port ${app.get('port')}`);
});

/* fetch('http://localhost:3000/usuarios', {
    method: 'GET',
    //mode: 'no-cors',
    })
    .then(response => console.log(response))
    .catch(err => console.error(error)); */