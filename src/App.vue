<template>
  <div id="app">
    <h1 class="mainTitle">Flying Truck Stops</h1>
    <Map />
    <FilterArea v-if="currentView === 'filterPanel'" />
    <TruckStops v-else />
    <button v-on:click="goSearch" class="btn">Search</button>
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
      return this.$store.state.filter.currentView;
    },
  },
  methods: {
    goSearch() {
      this.$store.dispatch("getFilteredLocations", { state: "AL" });
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
