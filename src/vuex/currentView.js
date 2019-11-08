export default {
  state: {
    currentView: "FilterArea",
  },
  mutations: {
    goSearch(state) {
      state.currentView = "TruckStops";
    },
  },
};
