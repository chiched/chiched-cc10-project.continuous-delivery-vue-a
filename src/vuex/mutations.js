export const mutations = {
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
  setViewSpot(state, spot) {
    const viewSpot = {
      zoomSize: spot.zoomSize,
      center: {
        lat: spot.center.lat,
        lng: spot.center.lng,
      },
    };
    state.viewSpot = viewSpot;
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
  updateStopTypes(state, types) {
    state.stopTypes = types;
  },
};
