const path = require("path");

// import statements: NODE npm modules
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const db = require("./util/database");

// create an exress app
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0], result[1]);
  })
  .catch((err) => {
    console.log(err);
  });

// use the bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false })); // returns middleware that only parses urlencoded bodies
// to allow app to use static file from public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// create an express server and listen to port 3000
app.listen(3000);
