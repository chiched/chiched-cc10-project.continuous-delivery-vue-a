const locationData = require("../../cc10-project.continuous-delivery-vue-a/data/locations.json");

exports.seed = function(knex, Promise) {
  return knex("locations")
    .del()
    .then(() => {
      return knex("locations").insert(
        locationData.map(
          (x) =>
            x.Site.Latitude ||
            x.Site.Longitude ||
            x.Addresses[0].Name ||
            x.Addresses[0].State ||
            x.Addresses[0].City ||
            x.Addresses[0].Address1 ||
            x.Addresses[0].Address2 ||
            x.Addresses[0].Zip
        )
      );
    })
    .then(() => {
      let locationPromises = [];
      locationData.forEach((location) => {
        locationPromises.push(createLocation(knex, location));
      });
      return Promise.all(locationPromises);
    });
};
const createLocation = (knex, location) => {
  return knex("locations").then(() => {
    return knex("locations").insert({
      latitude: location.Site.Latitude,
      longitude: location.Site.Longitude,
      name: location.Addresses[0].Name,
      state: location.Addresses[0].State,
      city: location.Addresses[0].City,
      address: location.Addresses[0].Address1 + location.Addresses[0].Address2,
      zip: location.Addresses[0].Zip,
    });
  });
};
