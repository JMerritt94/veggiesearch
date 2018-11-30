

const db = require("../models/recipe");

const express = require('express');
const axios = require("axios");
const scrape=require('../models/scrape')
const router = express.Router();
const cheerio = require("cheerio");



router.get("/", function(req, res) {
  res.render("index");
});

router.get("/scrape", function(req,res){
 
    axios.get("https://www.geniuskitchen.com/topic/vegetarian").then(function(response) {
        const $ = cheerio.load(response.data);
      
        $("h2").each(function (i, element) {
            console.log(i)
  let recipe = [];
            recipe.title = $(this).find("h2").text("a");
            recipe.link = $(this).find("h2").find("a").attr("href");
           console.log(recipe)
            db.Recipes.create(recipe)
                .then(function (dbRecipes) {
                    console.log(dbRecipes);
                })
                .catch(function (err) {
                    return res.json(err)
                });
        });
        res.send("scrape is complete");

    });

})

module.exports=router;



