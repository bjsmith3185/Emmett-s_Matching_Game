const router = require("express").Router();
const matchingGameController = require("../../controllers/matchingGameController");


// Matches with "/api/populate"

const matchingSeedArray = [
    {
        clicked: false,
        matched: false,
        name: "spongebob",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"
    },

    {
        clicked: false,
        matched: false,
        name: "mrKrab",
        image: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"

    },
    {
        clicked: false,
        matched: false,
        name: "Squidward",
        image: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
    },

    {
        clicked: false,
        matched: false,
        name: "otherGuy",
        image: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"
    },

    {
        clicked: false,
        matched: false,
        name: "spongebob",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"
    },
    {
        clicked: false,
        matched: false,
        name: "mrKrab",
        image: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
    },
    {
        clicked: false,
        matched: false,
        name: "Squidward",
        image: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
    },
    {
        clicked: false,
        matched: false,
        name: "otherGuy",
        image: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"
    },
]


router.route("/")
    .post((req, res) => {
        matchingGameController.removeAll()
            .then(dbresults => {

                for (var i = 0; i < matchingSeedArray.length; i++) {
                    matchingGameController.create(matchingSeedArray[i])
                        .then(dbresults => {
                            console.log("deleted and populated matching collection")

                        })
                        .catch(err => res.status(422).json(err))
                }
                res.json(dbresults)
            })
            .catch(err => res.status(422).json(err))
    });


module.exports = router;


