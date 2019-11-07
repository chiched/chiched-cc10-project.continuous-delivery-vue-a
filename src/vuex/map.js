// import axios from "axios";
const { testdata } = require("../../data/testdata.json");

export default {
  state: {
    locations: [],
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
  },
  actions: {
    // async loadMarkers({ commit }) {
    loadMarkers({ commit }) {
      try {
        // const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        console.log("testdata :", testdata);
        const markers = testdata.map((location) => ({
          position: location.position,
          key: location.name,
          defaultAnimation: 2,
        }));
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
