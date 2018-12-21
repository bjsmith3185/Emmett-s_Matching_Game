const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchingSchema = new Schema({
  category: { type: String},
  image: {type: String},
  clicked: false,
  matched: false,
  name: {type: String},
  
  
});

const Matching = mongoose.model("Matching", matchingSchema);

module.exports = Matching;
