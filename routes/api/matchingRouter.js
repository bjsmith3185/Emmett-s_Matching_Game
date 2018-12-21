const router = require("express").Router();
const matchingGameController = require("../../controllers/matchingGameController");

// Matches with "/api/matching"

router.route("/")
  .get((req, res) => {
    matchingGameController.findAll()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    matchingGameController.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/remove")
  .delete((req, res) => {
    matchingGameController.remove()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .get((req, res) => {
    matchingGameController.findBySearch({ search:req.params.search })
    .then(dbresults => {
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .put((req, res) => {
    matchingGameController.update(req.params.search, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .delete((req, res) => {
    matchingGameController.remove(req.params.search)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;




