const express = require('express');
const app = express();
const moviesRoutes = require('./api/routes/movies');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        return res.status(200).json({});
    };
    return next();
});

app.use('/movies', moviesRoutes);


app.use((req, res, next) => {
    console.log('index get');

    res.status(200).json({
        message: 'Hello World!!Deployed'
    });
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    error.status = error.status || 500;
    res.json({ error });
});


module.exports = app;
