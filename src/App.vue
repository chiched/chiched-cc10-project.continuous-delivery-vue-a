<template>
  <div id="app">
    <h1 class="mainTitle">Flying Truck Stops</h1>
    <Map />
    <FilterArea v-if="currentView === 'filterPanel'" />
    <TruckStops v-else />
    <button
      v-if="currentView === 'filterPanel'"
      v-on:click="goSearch"
      class="btn"
    >
      Search
    </button>
    <button v-else v-on:click="goHome" class="btn">Go to Home</button>
  </div>
</template>

<script>
import Map from "./components/Map/Map";
import FilterArea from "./components/FilterArea/FilterArea";
import TruckStops from "./components/TruckStops/TruckStops";

export default {
  name: "app",
  components: {
    Map,
    FilterArea,
    TruckStops,
  },
  computed: {
    currentView() {
      return this.$store.state.currentView;
    },
  },
  methods: {
    goSearch() {
      const filterObject = {};
      const stateChosen = this.$store.state.stateChosen;
      const cityChosen = this.$store.state.cityChosen;
      const highwayChosen = this.$store.state.highwayChosen;

      if (cityChosen) {
        filterObject.city = cityChosen;
      } else if (highwayChosen) {
        filterObject.highway = highwayChosen;
      }
      if (stateChosen) {
        filterObject.state = stateChosen;
        this.$store.dispatch("getFilteredLocations", filterObject);
      }
    },
    goHome() {
      this.$store.commit("switchView", "filterPanel");
      this.$store.commit("setMarkers", this.$store.state.locations);
      this.$store.commit("updateFilters", {});
      this.$store.commit("setFilteredLocations", []);
      this.$store.commit("updateStateChosen", null);
      this.$store.commit("updateCityChosen", null);
      this.$store.commit("updateHighwayChosen", null);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mainTitle {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 150px;
  height: 50px;
  margin: 20px auto;
  display: block;
}
</style>
