const router = require("express").Router();
const adminController = require("../../controllers/adminController");

// Matches with "/api/admin"

router.route("/")
  .get(adminController.findAll)
  .post(adminController.create);

router
  .route("/:company")
  .get(adminController.findByCompany)
  .put(adminController.update)
  .delete(adminController.remove);


module.exports = router;