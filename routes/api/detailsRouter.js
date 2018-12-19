const router = require("express").Router();
const details = require("../../controllers/searchMatchesController");


// Matches with "/api/advertisements"

router.route("/")
  .get((req, res) => {
    details.findAll()
      .then(dbresults => {
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/")
  .post((req, res) => {
    details.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .get((req, res) => {
    details.findByCompany({ company:req.params.company })
    .then(dbresults => {
      res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .put((req, res) => {
    details.update(req.params.company, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:company")
  .delete((req, res) => {
    details.remove(req.params.company)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });


module.exports = router;





