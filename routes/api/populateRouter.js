const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");


// Matches with "/api/populate"

const advertisementsSeedArray = [
    {
        company: "Amazon",
        keywords: ["books", "tv", "games", "everything", "amazon"],
        image: "https://beyondpesticides.org/dailynewsblog/wp-content/uploads/2017/03/Amazon-Logo.jpg",
        link: "https://www.amazon.com/",
        description: "Shop Amazon to get lower prices on everything.",
    },

    {
        company: "Target",
        keywords: ["clothes", "soap", "detergent", "target"],
        image: "https://pbs.twimg.com/profile_images/960896975737622528/-5k32D4t_400x400.jpg",
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
]


router.route("/")
    .post((req, res) => {
        advertisements.removeAll()
            .then(dbresults => {

                for (var i = 0; i < advertisementsSeedArray.length; i++) {
                    advertisements.create(advertisementsSeedArray[i])
                        .then(dbresults => {
                            console.log("deleted and populated advertisements collection")
                            
                        })
                        .catch(err => res.status(422).json(err))
                }
                res.json(dbresults)
            })
            .catch(err => res.status(422).json(err))
    });


module.exports = router;


