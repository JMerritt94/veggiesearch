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




const axios = require("axios");

const cheerio = require("cheerio");



app.get("/", function(req, res) {
  res.render("index");
});

app.get("/scrape", function(req,res){
 
    axios.get("https://old.reddit.com/r/vegetarian/").then(function(response) {
        const $ = cheerio.load(response.data);
        $("p.title").each(function(i, element) {

            let results= [];
            // Save the text of the element in a "title" variable
            var title = $(element).text();
        
            
            var link = $(element).children().attr("href");
        
            // Save these results in an object that we'll push into the results array we defined earlier
            results.push({
              title: title,
              link: link
            });
            console.log(results)
            db.Recipes.create(results)
                            .then(function (dbRecipes) {
                                console.log(dbRecipes);
                            })
                            .catch(function (err) {
                                return res.json(err)
                            });
                    });
          });
//         $("").each(function (i, element) {
//             console.log(i)
//   let result = [];
//             result.title = $(this).find("h2").text("a");
//             result.link = $(this).find("h2").find("a").attr("href");
//            console.log(result)
//             db.Recipes.create(result)
//                 .then(function (dbRecipes) {
//                     console.log(dbRecipes);
//                 })
//                 .catch(function (err) {
//                     return res.json(err)
//                 });
res.send("scrape is done");
        });
      











app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
  