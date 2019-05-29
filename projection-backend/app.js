const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const taskRoutes = require('./api/routes/tasks');
const userRoutes= require('./api/routes/users');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks',taskRoutes);
app.use('/api/users',userRoutes);

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