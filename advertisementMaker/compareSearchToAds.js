
const advertisementsController = require("../controllers/advertisementsController");
const userAdsController = require("../controllers/userAdsController");
const searchMatchesController = require("../controllers/searchMatchesController");

module.exports = {
    compare: function (searchWord) {
        let word = searchWord.term;
     
    return new Promise((resolve, reject) => {
        advertisementsController.findAll()
            .then(dbresults => {

                for (var i = 0; i < dbresults.length; i++) {
                    for (var k = 0; k < dbresults[i].keywords.length; k++) {
                        if (word === dbresults[i].keywords[k]) {
                            userAdsController.create(dbresults[i])
                                .then(result => {
                                    let newData = {
                                        search: word,
                                        company: result.company,
                                        keywords: result.keywords,
                                    }
                                    searchMatchesController.create(newData)
                                    .then(finished => {

                                        resolve(result);

                                    })
                                })
                        }
                    }
                }
            })
        })
    }
};

