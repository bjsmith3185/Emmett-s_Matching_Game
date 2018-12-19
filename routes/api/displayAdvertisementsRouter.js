const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");
const randomAd = require("../../advertisementMaker/randomAd");
const compareSearch = require("../../advertisementMaker/compareSearchToAds");
const userAds = require("../../controllers/userAdsController");


// Matches with "/api/advertisements"

router.route("/")
  .post((req, res) => {
    compareSearch.compare(req.body)
      .then(dbresults => {
        res.json(dbresults);
      })
      .catch(err => res.status(422).json(err))
  });

router.route("/check")
  .get((req, res) => {
    userAds.findAll()
      .then(dbresults => {
        if (dbresults.length) {
          let value = randomAd.randomizeAds(dbresults)
          res.json(value)
        } else {
          advertisements.findAll()
            .then(data => {
              let value = randomAd.randomizeAds(data)
              res.json(value)
            })
            .catch(err => res.status(422).json(err))
        }
      })
      .catch(err => res.status(422).json(err))
  });















// router.route("/")
//   .post((req, res) => {
//     console.log("post request to create")
//     console.log(req.body)

//     advertisements.create(req.body)
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   });

router.route("/:company")

  .get((req, res) => {
    console.log("a request for company results.")
    console.log(req.params.company)
    advertisements.findByCompany({ company: req.params.company })
      .then(dbresults => {
        console.log("$$$$$$$")
        console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  });

router.route("/:company")
  .put((req, res) => {
    console.log("this is updating advertisements info")
    console.log(req.params.company)
    console.log(req.body)
    advertisements.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

router.route("/:company")
  .delete((req, res) => {
    console.log("this is req to delete company");
    console.log(req.params.company)
    advertisements.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;





