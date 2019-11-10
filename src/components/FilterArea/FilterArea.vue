<template src="./template.html"> </template>

<script>
export default {
  name: "FilterArea",
  props: {
    msg: String,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    states() {
      return this.$store.state.states;
    },
    citiesInState() {
      const data = this.$store.state.locations;

      return data
        .filter((location) => {
          return this.$store.state.stateChosen === location.state;
        })
        .map((stateLocations) => {
          return stateLocations.city;
        });
    },
    highwaysInState() {
      const data = this.$store.state.locations;

      return data
        .filter((location) => {
          return this.$store.state.stateChosen === location.state;
        })
        .map((stateLocations) => {
          return stateLocations.highway;
        });
    },
    stopTypes: {
      get() {
        return this.$store.state.stopTypes;
      },
      set(value) {
        this.$store.commit("updateStopTypes", value);
      },
    },
    stateChosen: {
      get() {
        return this.$store.state.stateChosen;
      },
      set(value) {
        this.$store.commit("updateStateChosen", value);
      },
    },
    cityChosen: {
      get() {
        return this.$store.state.cityChosen;
      },
      set(value) {
        this.$store.commit("updateCityChosen", value);
      },
    },
    highwayChosen: {
      get() {
        return this.$store.state.highwayChosen;
      },
      set(value) {
        this.$store.commit("updateHighwayChosen", value);
      },
    },
  },
};
</script>

<style scoped src="./style.css">
</style>
