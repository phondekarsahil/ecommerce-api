// import statements: NODE npm modules
const express = require('express');
const bodyParser = require('body-parser');

// create an exress app
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// use the bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false })); // returns middleware that only parses urlencoded bodies

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
});

// create an express server and listen to port 3000
app.listen(3000);