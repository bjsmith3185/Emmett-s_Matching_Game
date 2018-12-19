
// this function will pick a random ad from the adsArray

module.exports = {

    randomizeAds: function (adsArray) {
        var randomIndex = Math.floor((Math.random() * adsArray.length));
        var thisAd = adsArray[randomIndex];

        return thisAd;
    },

};