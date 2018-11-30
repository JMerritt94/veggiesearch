const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;


const app = express();

const routes = require("./controllers/routes.js");






app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());







app.use('/',routes);



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/veggies";


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
     useNewUrlParser: true }
);


app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
  