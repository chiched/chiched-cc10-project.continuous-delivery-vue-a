<template src="./template.html"> </template>

<script>
export default {
  name: "FilterArea",
  props: {
    msg: String,
  },
  computed: {
    states() {
      return this.$store.state.states;
    },
  },
};
</script>

<style scoped src="./style.css">
</style>
