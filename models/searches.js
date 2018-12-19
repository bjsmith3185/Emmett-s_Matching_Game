const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchesSchema = new Schema({
  search: { type: String},
  
});

const Searches = mongoose.model("Searches", searchesSchema);

module.exports = Searches;
