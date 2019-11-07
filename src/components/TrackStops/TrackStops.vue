<template src="./template.html">
</template>

<script>
export default {
  name: "TrackStop",
  props: {
    hit: Number,
    address: String,
    city: String,
    state: String,
    zip: String,
    tell: String,
  },
};
</script>

<style scoped src="./style.css">
</style>
