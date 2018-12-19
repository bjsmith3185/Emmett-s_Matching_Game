const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchMatchesSchema = new Schema({
  search: {type: String},
  company: { type: String},
  keywords: [String],
  
});

const SearchMatches = mongoose.model("SearchMatches", searchMatchesSchema);

module.exports = SearchMatches;
