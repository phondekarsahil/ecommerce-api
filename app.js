// import statements: NODE npm modules
const express = require('express');
const bodyParser = require('body-parser');

// create an exress app
const app = express();

// use the bodyparser middleware
app.use(bodyParser.urlencoded({extended: false})); // returns middleware that only parses urlencoded bodies

// configure the app to use middleware to listen to '/'
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next(); // Continues  to the next middleware in the line
});

app.use('/add-product', (req, res, next) => {
    console.log('In the add product middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// listens for the post requests for specified path
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!<h1/>');
});

// create an express server and listen to port 3000
app.listen(3000);