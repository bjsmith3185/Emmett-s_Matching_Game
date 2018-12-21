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

  router.route("/:category")
  .get((req, res) => {
    matchingGameController.findByCategory({ category:req.params.category })
    .then(dbresults => {
      console.log("this is the return from the database server")
      console.log(dbresults);
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:category")
  .put((req, res) => {
    matchingGameController.update(req.params.category, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:category")
  .delete((req, res) => {
    matchingGameController.remove(req.params.category)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;




