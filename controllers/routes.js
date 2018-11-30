
const Recipes = require("../models/recipe");

const express = require('express');
const axios = require("axios");
const scrape=require('../models/scrape')
const router = express.Router();
const cheerio = require("cheerio");



router.get("/", function(req, res) {
  res.render("index");
});

router.get("/scrape", function(req,res){
 
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
            Recipes.create(results)
            //this file isnt working and i have literally no idea why, its exactly like it was on the example we did in class
                            .then(function (Recipes) {
                                // console.log(dbRecipes);
                            })
                            .catch(function (err) {
                                console.log(err)
                            });
                    });
                    
          });
//         $("div.fd-recipe").each(function (i, element) {
//             console.log(i)
//   let result = [];
//             result.title = $(this).find("h2").text("a");
//             result.link = $(this).find("h2").find("a").attr("href");
//            console.log(result)
//             Recipes.create(result)
//                 .then(function (dbRecipes) {
//                     console.log(dbRecipes);
//                 })
//                 .catch(function (err) {
//                     return res.json(err)
//                 });
console.log(Recipes);
res.redirect("/");
        });
      



        //router.post("/comments", function(req,res){
            //the route would go though recipes and add a comment to the recipe at the id that is generated.
        //





module.exports=router;



