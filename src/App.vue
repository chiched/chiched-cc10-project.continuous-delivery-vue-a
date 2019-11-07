<template>
  <div id="app">
    <h1 class="mainTitle">Flying Truck Stops</h1>
    <Map />
    <FilterArea />
  </div>
</template>

<script>
import FilterArea from "./components/FilterArea/FilterArea";
import Map from "./components/Map/Map";

export default {
  name: "app",
  components: {
    FilterArea,
    Map,
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
</style>
