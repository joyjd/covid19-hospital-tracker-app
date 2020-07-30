const ApiUrls = {
  getUserCurrentLocation: "https://maps.googleapis.com/maps/api/geocode/json?latlng=",
  getPlaceDetails: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=",
  getHospitalCompleteDetails: "https://maps.googleapis.com/maps/api/place/details/json?place_id=",
  getCoronaUpdate: "https://api.covid19india.org/state_district_wise.json",
};

export default ApiUrls;
