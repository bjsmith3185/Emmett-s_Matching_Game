const router = require("express").Router();
const matchingGameController = require("../../controllers/matchingGameController");


// Matches with "/api/populate"

const matchingSeedArray = [
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "a",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/A1.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "a",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/A1.png"

    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "b",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/B3.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "b",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/B3.png"
    },

    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "c",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/10/C.png"
    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "c",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/10/C.png"
    },
    {
        category: "letters",
        clicked: false,
        matched: false,
        name: "d",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/D1.png"
    },
    {
        category: "letters",
        category: "letters",
        clicked: false,
        matched: false,
        name: "d",
        image: "http://homeschooled-kids.com/hskidsonline/wp-content/uploads/2013/09/D1.png"
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


