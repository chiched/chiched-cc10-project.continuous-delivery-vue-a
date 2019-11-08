import axios from "axios";

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
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
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
