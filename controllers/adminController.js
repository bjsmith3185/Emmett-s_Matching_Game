// const db = require("../models");


// module.exports = {

//    findAll: function (req, res) {
//    db.Advertisements
//       .find({})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   findByCompany: function (req, res) {
//     db.Advertisements
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  
//   create: function (req, res) {
//     db.Advertisements
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function (req, res) {
//     // console.log("this is update() in admincontroller.js")
//     // console.log(req.params.company)
//     // console.log(req.body)
//     db.Advertisements
//       .findOneAndUpdate({ company: req.params.company }, req.body, {upsert:true})
//       .then(dbModel => {
//         // console.log("this is the return from update");
//         // console.log(dbModel);
//         res.json(dbModel)})
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function (req, res) {
//     // console.log("this is the delete()")
//     // console.log(req.params.company)
//     db.Advertisements
//       .deleteOne({company: req.params.company})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));

//       // .findById({ company: req.params.company })
//       // .then(dbModel => {
//       //   console.log(dbModel);
//       //   dbModel.remove()})
//       // .then(dbModel => res.json(dbModel))
//       // .catch(err => res.status(422).json(err));
//   }
// };
