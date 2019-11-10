import { expect } from "chai";
// import Vuex from "vuex";
// import { shallowMount, createLocalVue } from "@vue/test-utils";
import { state } from "../../src/vuex/state";
import { mutations } from "../../src/vuex/mutations";

// const localVue = createLocalVue();
// localVue.use(Vuex);

describe("mutations", () => {
  describe("setLocations", () => {
    it("When locations is including single location.", () => {
      const locationData = [
        {
          address: "300 Arby Dr. ",
          city: "Clanton",
          def: "65",
          exit: "208",
          fax: "(205) 755-8694",
          highway: "I-65",
          id: 47521,
          latitude: 32.84415,
          longitude: -86.591965,
          name: "Clanton - 368",
          parking: "65",
          state: "AL",
          tell: "(205) 755-8104",
          type: "Travel Stop",
          zip: "35045",
        },
      ];
      mutations.setLocations(state, locationData);
      expect(state.locations).to.deep.equal(locationData);
    });
  });

  describe("setMarkers", () => {
    it("When locations is including single location.", () => {
      const locationData = [
        {
          address: "300 Arby Dr. ",
          city: "Clanton",
          def: "65",
          exit: "208",
          fax: "(205) 755-8694",
          highway: "I-65",
          id: 47521,
          latitude: 32.84415,
          longitude: -86.591965,
          name: "Clanton - 368",
          parking: "65",
          state: "AL",
          tell: "(205) 755-8104",
          type: "Travel Stop",
          zip: "35045",
        },
      ];
      const resultData = [
        {
          position: {
            lat: 32.84415,
            lng: -86.591965,
          },
          key: "Clanton - 3680",
          defaultAnimation: 2,
        },
      ];
      mutations.setMarkers(state, locationData);
      expect(state.markers).to.deep.equal(resultData);
    });
  });

  describe("setViewSpot", () => {
    it("When spot data is including single spot.", () => {
      const spotData = {
        zoomSize: 3.5,
        center: { lat: 37.5, lng: -98.5 },
      };
      mutations.setViewSpot(state, spotData);
      expect(state.viewSpot).to.deep.equal(spotData);
    });
  });

  describe("setFilteredLocations", () => {
    it("When nothing is filtered.", () => {
      const filterData = [];
      mutations.setFilteredLocations(state, filterData);
      expect(state.filteredLocations).to.deep.equal(filterData);
    });
    it("When some data is filtered and result is one location.", () => {
      const filterData = [
        {
          address: "300 Arby Dr. ",
          city: "Clanton",
          def: "65",
          exit: "208",
          fax: "(205) 755-8694",
          highway: "I-65",
          id: 101954,
          latitude: 32.84415,
          longitude: -86.591965,
          name: "Clanton - 368",
          parking: "65",
          state: "AL",
          tell: "(205) 755-8104",
          type: "Travel Stop",
          zip: "35045",
        },
      ];
      mutations.setFilteredLocations(state, filterData);
      expect(state.filteredLocations).to.deep.equal(filterData);
    });
  });

  describe("switchView", () => {
    it("When currentView is resultsPanel.", () => {
      expect(state.currentView).to.equal("filterPanel");
      const view = "resultsPanel";
      mutations.switchView(state, view);
      expect(state.currentView).to.equal("resultsPanel");
    });
    it("When currentView is filterPanel.", () => {
      expect(state.currentView).to.equal("resultsPanel");
      const view = "filterPanel";
      mutations.switchView(state, view);
      expect(state.currentView).to.equal("filterPanel");
    });
  });

  describe("updateFilters", () => {
    it("When nothing is filtered.", () => {
      const filterData = {};
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("When only state is filtered.", () => {
      const filterData = { state: "AL" };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("When state and city is filtered.", () => {
      const filterData = { state: "AL", city: "Clanton" };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("When only Travel Stop(type) is filtered.", () => {
      const filterData = { type: ["Travel Stop"] };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("When only Country Store(type) is filtered.", () => {
      const filterData = { type: ["Country Store"] };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("When state & city & Travel Stop(type) & Country Store(type) are filtered.", () => {
      const filterData = {
        state: "AL",
        city: "Clanton",
        type: ["Travel Stop", "Country Store"],
      };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
  });

  describe("updateStateChosen", () => {
    it("When state is selected.", () => {
      const chosenData = "WA";
      mutations.updateStateChosen(state, chosenData);
      expect(state.stateChosen).to.equal(chosenData);
    });
  });

  describe("updateCityChosen", () => {
    it("When city is selected.", () => {
      const chosenData = "Tacoma";
      mutations.updateCityChosen(state, chosenData);
      expect(state.cityChosen).to.equal(chosenData);
    });
  });

  describe("updateHighwayChosen", () => {
    it("When city is selected.", () => {
      const chosenData = "I-65";
      mutations.updateHighwayChosen(state, chosenData);
      expect(state.highwayChosen).to.equal(chosenData);
    });
  });

  describe("updateStopTypes", () => {
    it("When Travel Stop is selected.", () => {
      const chosenData = ["Travel Stop"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("When Country Store is selected.", () => {
      const chosenData = ["Country Store"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("When both types are selected.", () => {
      const chosenData = ["Country Store", "Travel Stop"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("When nothing is selected.", () => {
      const chosenData = [];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
  });
});
