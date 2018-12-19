const router = require("express").Router();
const searches = require("../../controllers/searchesController");

// Matches with "/api/searches"

router.route("/")
  .get((req, res) => {
    searches.findAll()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    searches.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/remove")
  .delete((req, res) => {
    searches.remove()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .get((req, res) => {
    searches.findBySearch({ search:req.params.search })
    .then(dbresults => {
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .put((req, res) => {
    searches.update(req.params.search, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:search")
  .delete((req, res) => {
    searches.remove(req.params.search)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });



module.exports = router;




