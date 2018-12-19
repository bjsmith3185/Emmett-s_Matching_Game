const db = require("../models");

module.exports = {
  findAll: function () {
    return db.UserAds
      .find({})
  },

  create: function (company) {
    return db.UserAds
      .create({
        company: company.company,
        keywords: company.keywords,
        image: company.image,
        link: company.link,
        description: company.description,
      })
  },

  remove: function () {
    return db.UserAds
      .remove({})
  }
};
