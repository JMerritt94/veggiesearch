

const db = require("../models/recipe");

const express = require('express');
const axios = require("axios");
const scrape=require('../models/scrape')
const router = express.Router();

const recipe= require('../models/recipe')


router.get("/", function(req, res) {
  res.render("index");
});

router.get("/scrape", function(req,res){
 scrape().then(function(recipe)
{return db.Recipe.create(recipe)

})
.then(function(dbRecipes){
    res.send("finished scrape")
    console.log(recipes)
    console.log("done w scrape!");
    res.redirect("/");
})
.catch(function(err){
    res.json(err);
});

})

module.exports=router;



