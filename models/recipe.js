const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }  
  
});

recipeSchema.index({title: "text"});

let recipe = mongoose.model("recipe", recipeSchema);
module.exports = recipe;