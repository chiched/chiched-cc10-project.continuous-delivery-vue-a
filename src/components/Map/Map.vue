<template src="./template.html"></template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Map",
  mounted() {
    this.getLocations();
  },
  computed: {
    locations() {
      return this.$store.state.markers;
    },
    google: gmapApi,
  },
  methods: {
    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
    markerRightClicked() {},
  },
};
</script>
