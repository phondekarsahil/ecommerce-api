// import statements: CORE modules
const http = require('http');

// import statements: NODE npm modules
const express = require('express');

// create an exress app
const app = express();

// configure the app to use middleware => here we use our own fn as a middleware
app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Continues  to the next middleware in the line
});

app.use((req, res, next) => {
    console.log('In the second middleware');
    res.send('<h1>Hello from Express!<h1/>');
});

// create an express server and listen to port 3000
app.listen(3000);