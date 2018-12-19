const router = require("express").Router();
const advertisements = require("../../controllers/advertisementsController");



// Matches with "/api/advertisements"

router.route("/")
  .get((req, res) => {
    advertisements.findAll()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    advertisements.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .get((req, res) => {
    advertisements.findByCompany(req.params.company)
    .then(dbresults => {
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .put((req, res) => {
    advertisements.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .delete((req, res) => {
    advertisements.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/keywords")
  .get((req, res) => {
    advertisements.findAll()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });


module.exports = router;





