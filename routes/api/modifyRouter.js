const router = require("express").Router();
const searches = require("../../controllers/searchesController");
const details = require("../../controllers/searchMatchesController");
const userAds = require("../../controllers/userAdsController");


// Matches with "/api/modify/searches"

router.route("/")
  .delete((req, res) => {
    searches.remove()
      .then(search => {
        details.remove()
          .then(details => {
            userAds.remove()
              .then(userads => {

                let data = {
                  searches: search.n,
                  details: details.n,
                  customads: userads.n,
                }
                res.json(data)
              })
              .catch(err => res.status(422).json(err))
          })
          .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err))

  });


module.exports = router;

