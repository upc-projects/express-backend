const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const projectTaskRoutes = require('./api/routes/projectTask'); // completar
const userRoutes = require('./api/routes/user'); // completar

// mongoose.connect(
//     'mongodb+srv://node-headhunter:admin@cluster0-8btrp.mongodb.net/test?retryWrites=true',
//     { 
//         useNewUrlParser: true
//     }
// ) //cambiar a otra bd

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//permite acceso a backend desde cualquier otra pc

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//configuramos los endpoints

app.use('/projectTask',projectTaskRoutes);
app.use('/users',userRoutes);

//para posibles errores de no encontrar el endpoint

app.use((req,res,next) => {
    const error= new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;