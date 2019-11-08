import Vue from "vue";
import Vuex from "vuex";
import map from "./map";
import filter from "./filter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map,
    filter,
  },
});
