<template src="./template.html"> </template>

<script>
export default {
  name: "TruckStop",
  props: {
    hit: Number,
    address: String,
    city: String,
    state: String,
    zip: String,
    tell: String,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    resultArray() {
      return this.$store.state.filteredLocations;
    },
    numberOfResults() {
      return this.$store.state.filteredLocations.length;
    },
  },
};
</script>

<style scoped src="./style.css">
</style>
