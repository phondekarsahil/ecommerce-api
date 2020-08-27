// import statements: CORE modules
const http = require('http');

// import statements: NODE npm modules
const express = require('express');

// create an exress app
const app = express();

// configure the app to use middleware to listen to '/'
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next(); // Continues  to the next middleware in the line
});

app.use('/add-product', (req, res, next) => {
    console.log('In the add product middleware');
    res.send('<h1>The Add Product Page<h1/>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!<h1/>');
});

// create an express server and listen to port 3000
app.listen(3000);