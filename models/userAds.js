const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAdsSchema = new Schema({
  company: { type: String},
  keywords: [String],
  image: {type: String},
  link: {type: String},
  description: {type: String},
  
});

const UserAds = mongoose.model("UserAds", userAdsSchema);

module.exports = UserAds;
