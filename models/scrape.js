// const cheerio = require("cheerio");
// const axios = require("axios");

// var scrape = function() {
// console.log("scrape worked sortof")
//   axios.get("https://www.geniuskitchen.com/topic/vegetarian").then(function(res) {
//     const $ = cheerio.load(res.data);
   
//     let recipes = [];
    
  
//     $(".fd.recipe").each(function(i, element) {
 
//       recipes.title = $(this)
//         .find("h2")
//         .text()
//         .trim();

//         console.log(recipes.title)

     
//       recipes.link = $(this)
//         .children("h2")
//         .children("a")
//         .attr("href");


  

     
//       if (title && link) {
      
        
//         // Initialize an object we will push to the recipes array

//         var recipesScraped = {
//           title: title,
//           link: link,
//         };

//         recipes.push(recipesScraped); console.log(recipesScraped)
//       }
//     });
   
//     return recipes;
//   });
// };

// // Export the function, so other files in our backend can use it
// module.exports = scrape;