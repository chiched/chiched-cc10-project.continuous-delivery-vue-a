<template>
  <div id="map">
    <GmapMap
      :zoom="viewSpot.zoomSize"
      :center="viewSpot.center"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
      ref="mapRef"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.key"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Map",
  mounted() {
    this.getLocations();
  },
  computed: {
    locations() {
      const allMarkers = this.$store.state.markers;
      let [max, min] = [[], []]; // [lat, lng]
      let conterLat = 37.5;
      let conterLng = -98.5;
      let zoomSize = 4;

      if (allMarkers.length !== 0) {
        allMarkers.forEach((marker) => {
          if (!max[0] || max[0] < marker.position.lat)
            max[0] = marker.position.lat;
          if (!min[0] || min[0] > marker.position.lat)
            min[0] = marker.position.lat;
          if (!max[1] || max[1] < marker.position.lng)
            max[1] = marker.position.lng;
          if (!min[1] || min[1] > marker.position.lng)
            min[1] = marker.position.lng;
        });
        conterLat = Math.round(max[0] + min[0]) / 2;
        conterLng = Math.round(max[1] + min[1]) / 2;

        // Calculate the difference between the latitudes of two points (radians)
        const differLat = (max[0] * Math.PI) / 180 - (min[0] * Math.PI) / 180;
        // Calculate the difference between the longitudes of two points (radians)
        const differLng = (max[1] * Math.PI) / 180 - (min[1] * Math.PI) / 180;

        if (differLat > differLng) {
          if (differLat > 0.8) {
            zoomSize = 4.2;
          } else if (differLat > 0.5) {
            zoomSize = 4.8;
          } else if (differLat > 0.2) {
            zoomSize = 5;
          } else if (differLat > 0.1) {
            zoomSize = 5.2;
          } else {
            zoomSize = 5.5;
          }
        } else {
          if (differLng > 0.8) {
            zoomSize = 4.2;
          } else if (differLng > 0.5) {
            zoomSize = 4.8;
          } else if (differLng > 0.2) {
            zoomSize = 5;
          } else if (differLat > 0.1) {
            zoomSize = 5.2;
          } else {
            zoomSize = 5.5;
          }
        }
      }

      let spot = {
        zoomSize: zoomSize,
        center: { lat: conterLat, lng: conterLng },
      };
      this.$store.commit("setViewSpot", spot);
      return this.$store.state.markers;
    },
    viewSpot() {
      return this.$store.state.viewSpot;
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
