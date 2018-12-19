const db = require("../models");


module.exports = {
  findAll: function () {
    return db.Searches
      .find({})
  },

  findBySearch: function (search) {
    return db.Searches
      .findBySearch({ search: search })
  },

  create: function (data) {
    return db.Searches
      .create(data)
  },

  update: function (search, data) {
    return db.Searches
      .findOneAndUpdate({ search: search }, data, {upsert: true})
  },

  remove: function () {
    return db.Searches
    .remove({})
  }
  
};
