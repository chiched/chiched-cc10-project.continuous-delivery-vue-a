import axios from "axios";

export default {
  state: {
    states: [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ],
    locationInformation: [],
    currentView: "filterPanel",
    currentFilters: {
      state: "",
      city: "",
      highway: "",
    },
  },
  mutations: {
    setLocationInformation(state, locationInformation) {
      state.locationInformation = locationInformation;
    },
    switchView(state, view) {
      state.currentView = view;
    },
    updateFilters(state, newFilters) {
      for (let filter in newFilters) {
        state.currentFilters[filter] = newFilters[filter];
      }
    },
  },
  actions: {
    async getFilteredLocations(store, filterOptions) {
      store.commit("updateFilters", filterOptions);
      try {
        const { data } = await axios.get("/api/locations");
        const filteredLocationInformation = data.filter((location) => {
          let allTrue = true;
          for (const key in filterOptions) {
            location[key] === filterOptions[key] ? true : (allTrue = false);
          }
          return allTrue;
        });
        store.commit("setLocationInformation", filteredLocationInformation);
        store.commit("switchView", "resultsPanel");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
