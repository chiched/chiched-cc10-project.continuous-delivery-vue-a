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
      let conterLat = Math.round(max[0] + min[0]) / 2;
      let conterLng = Math.round(max[1] + min[1]) / 2;

      // const bounds = new gmapApi.maps.LatLngBounds();
      // console.log(bounds);
      // this.$refs.mapRef.$mapPromise.then((map) => {
      //   console.log(map.zoom);
      //   map.panTo({
      //     lat: this.$store.state.viewSpot.lat,
      //     lng: this.$store.state.viewSpot.lng,
      //   });
      // });

      let spot = {
        zoomSize: 4.5,
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
