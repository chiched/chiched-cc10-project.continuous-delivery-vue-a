//import axios from "axios";

export default {
    state: {
      states: ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
      locationInformation: [],
      currentView: "filterPanel",
      currentFilters: {
        state: "",
        city: "",
        highway: "",
        oilchange: true,
        lightMechanical: true,
        tirepass: true,
        truckTireCare: true,
        travelShop,
        countryStore,
        atm: true,
        wifi: true,
        others: true,
        arbys: true,
        wendys: true
    },
    getters: {

    },
    mutations: {
      setLocationInformation(state, locationInformation) {
        state.locationInformation = locationInformation;
      },
      switchView(state, view) {
          state.currentView = view;
      },
      updateFilters(state, newFilters) { 
        for (let filter in newFilters) {
          state.currentFilters[filter] = newFilters[filter];
        }
       //? return state.currentFilters;
       }
    },
    actions: {
        setLocationInformationswitchView(locationInformation) {
            store.commit("setLocationInformationswitchView", locationInformation);
        },
        switchView(view) {
            store.commit("switchView", view);
        },
        updateFilters(newFilters) {
            store.commit("updateFilters", newFilters);
        }
    }
  }
}
