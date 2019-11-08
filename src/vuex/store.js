import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateChosen: null,
    cityChosen: null,
    highwayChosen: null,
    locations: [],
    markers: [],
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
    filteredLocations: [],
    currentView: "filterPanel",
    currentFilters: {},
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    setMarkers(state, locations) {
      const markers = locations.map((location, index) => ({
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        key: location.name + index,
        defaultAnimation: 2,
      }));
      state.markers = markers;
    },
    setFilteredLocations(state, filteredLocations) {
      state.filteredLocations = filteredLocations;
    },
    switchView(state, view) {
      state.currentView = view;
    },
    updateFilters(state, newFilters) {
      state.currentFilters = newFilters;
    },
    updateStateChosen(state, stateChosen) {
      state.stateChosen = stateChosen;
    },
    updateCityChosen(state, city) {
      state.cityChosen = city;
    },
    updateHighwayChosen(state, highway) {
      state.highwayChosen = highway;
    },
  },
  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        commit("setLocations", locations);
        commit("setMarkers", locations);
      } catch (err) {
        console.error(err);
      }
    },
    async getFilteredLocations(store, filterOptions) {
      store.commit("updateFilters", filterOptions);
      try {
        const data = store.state.locations;
        const filteredLocationInformation = data.filter((location) => {
          let allTrue = true;
          for (const key in filterOptions) {
            location[key] === filterOptions[key] ? true : (allTrue = false);
          }
          return allTrue;
        });
        store.commit("setFilteredLocations", filteredLocationInformation);
        store.commit("setMarkers", filteredLocationInformation);
        store.commit("switchView", "resultsPanel");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
