const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advertisementsSchema = new Schema({
  company: { type: String},
  keywords: [String],
  image: {type: String},
  link: {type: String},
  description: {type: String},
  
  
});

const Advertisements = mongoose.model("Advertisements", advertisementsSchema);

module.exports = Advertisements;
