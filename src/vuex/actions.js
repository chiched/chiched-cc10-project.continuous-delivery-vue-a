import axios from "axios";

export const actions = {
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
          if (key === "type") {
            filterOptions[key].includes(location[key])
              ? true
              : (allTrue = false);
          } else {
            location[key] === filterOptions[key] ? true : (allTrue = false);
          }
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
};
