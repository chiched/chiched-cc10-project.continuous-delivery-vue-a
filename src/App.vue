<template>
  <div id="app">
    <h1 class="mainTitle">Flying Truck Stops</h1>
    <Map />
    <FilterArea v-if="currentView === 'filterPanel'" />
    <TruckStops v-else />
    <button
      v-if="currentView === 'filterPanel'"
      v-on:click="goSearch"
      class="searchBtn"
    >
      Search
    </button>
    <button v-on:click="goHome" class="homeBtn">
      <img src="./assets/home.png" />
    </button>
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
      const stopTypes = this.$store.state.stopTypes;

      if (stateChosen) {
        filterObject.state = stateChosen;
      }

      if (cityChosen) {
        filterObject.city = cityChosen;
      } else if (highwayChosen) {
        filterObject.highway = highwayChosen;
      }

      if (stopTypes.length > 0) {
        filterObject["type"] = stopTypes;
      }

      if (Object.keys(filterObject).length > 0) {
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
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mainTitle {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  margin: 0;
  padding: 10px;
  text-align: center;
  background: white;
}
.searchBtn {
  width: 150px;
  height: 50px;
  margin: 0 auto 30px;
  display: block;
  position: relative;
  top: 454px;
}
.homeBtn {
  position: fixed;
  top: 12px;
  left: 10px;
  z-index: 3;
  border: 0;
  background: #fff;
  outline: none;
}
.homeBtn img {
  width: 40px;
  height: 40px;
}
@media screen and (max-width: 781px) {
  .mainTitle {
    font-size: 24px;
    line-height: 44px;
  }
}
</style>
