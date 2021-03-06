const locationData = require("../data/locations.json");

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
            x.Addresses[0].Zip ||
            x.ContactMethods ||
            x.FilteredCustomFields ||
            x.Site.Highway ||
            x.Site.ExitNumber ||
            x.FacilitySubtype ||
            x.Site.Concepts ||
            x.CustomFields
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
  let restaurants,
    services,
    amenities = [];
  let concepts = location.Site.Concepts;
  let customFields = location.CustomFields;
  restaurants = concepts.map((x) => x.Concept.Name);
  services = customFields
    .filter((x) => x.CustomField.Section === "Select Truck Services")
    .map((x) => x.CustomField.DisplayName);

  amenities = customFields
    .filter((x) => x.CustomField.Section === "Select Amenities")
    .map((x) => x.CustomField.DisplayName);

  return knex("locations").then(() => {
    return knex("locations").insert({
      latitude: location.Site.Latitude,
      longitude: location.Site.Longitude,
      name: location.Addresses[0].Name,
      state: location.Addresses[0].State,
      city: location.Addresses[0].City,
      address:
        location.Addresses[0].Address1 + " " + location.Addresses[0].Address2,
      zip: location.Addresses[0].Zip,
      tell: location.ContactMethods.filter(
        (x) => x.ContactMethodTypeId === 1
      )[0].Data,
      fax: location.ContactMethods.filter((x) => x.ContactMethodTypeId === 5)[0]
        .Data,
      parking: location.FilteredCustomFields.filter(
        (x) => x.CustomFieldId === 347 || 348
      ).map((x) => x.Value)[0],
      def: location.FilteredCustomFields.filter(
        (x) => x.CustomFieldId === 343 || 344
      ).map((x) => x.Value)[0],
      type: location.FacilitySubtype.Name,
      highway: location.Site.Highway,
      exit: location.Site.ExitNumber,
      restaurants: restaurants,
      services: services,
      amenities: amenities,
    });
  });
};
