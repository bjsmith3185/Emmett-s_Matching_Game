import axios from "axios";


export default {

  getSearches: function () {  
    return axios.get("/api/searches");
  },

  saveSearch: function (data) {  
    return axios.post("/api/searches", data);
  },

 
  compareSearchTermToAds: function (data) {  
    return axios.post("/api/displayads", data)
  },
  
  checkForCustomAds: function () {  
    return axios.get("/api/displayads/check")
  },


  saveAdvertisement: function (data) {
    return axios.put("/api/advertisements", data);
  },

  createNewAd: function (data) {
    return axios.post("/api/advertisements", data)
  },

  showAllAds: function () {
    return axios.get("/api/advertisements");
  },


  deleteAd: function (company) {
    return axios.delete("/api/advertisements/" + company)
  },

  updateAd: function (data, company) {
    return axios.put("/api/advertisements/" + company, data);
  },

  findOneAd: function (company) {
    return axios.get("/api/advertisements/" + company);
  },

 
  getDetails: function () {
    return axios.get("/api/details");
  },


  clearUserSearches: function () {
    return axios.delete("/api/modify");
  },


  populateAdvertisements: function() {
    return axios.post("/api/populate");
  },

  
};

