const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersearches"
);


const advertisementsSeed = [
  {
    company: "Amazon",
    keywords: ["books", "tv", "games", "everything", "amazon"],
    image: "data:image/png;base64,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",
    link: "https://www.amazon.com/",
    description: "Shop Amazon to get lower prices on everything.",
  },
  {
    company: "Target",
    keywords: ["clothes", "soap", "detergent", "target"],
    image: "data:image/png;base64,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",
    link: "https://www.target.com/",
    description: "Shop at Target because you are better than Walmart! Bring your Wallet",
  },
  {
    company: "UNCC",
    keywords: ["coding", "bootcamp", "learning", "uncc"],
    image: "https://images-na.ssl-images-amazon.com/images/I/61ZuoCK%2B3vL._SX425_.jpg",
    link: "https://bootcamp.uncc.edu/coding/",
    description: "Join us while we learn to code and type. Click the link for more info.",
  },
  {
    company: "Trader Joes",
    keywords: ["organic", "bagless", "apples", "snacks", "trader joes"],
    image: "https://fortunedotcom.files.wordpress.com/2016/03/776-ft-lauderdale-fl-night.jpg",
    link: "https://www.traderjoes.com/",
    description: "Come shop at Trader Joes, Everyone is doing it! Bring your own bag too.",
  },
  {
    company: "Walmart",
    keywords: ["walmart", "toys", "christmas", "gifts", "electronics"],
    image: "https://visitlaramie.org/wp-content/uploads/2013/06/walmart-logo.jpg",
    link: "https://www.walmart.com/",
    description: "Shop Walmart this Christmas, even on Christmas day.",
  },
];




  seedDatabase = function () {
    db.Advertisements
    .remove({})
    .then(() => db.Advertisements.collection.insertMany(advertisementsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

  }



  