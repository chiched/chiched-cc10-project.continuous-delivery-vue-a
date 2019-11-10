import { expect } from "chai";
import { state } from "../../src/vuex/state";
import { mutations } from "../../src/vuex/mutations";

describe("mutations", () => {
  describe("setLocations", () => {
    it("It should change 'state.locations' when argument includes single location.", () => {
      expect(state.locations).to.deep.equal([]);
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
    it("It should change 'state.markers' to new arrar data from argument locations data.", () => {
      expect(state.markers).to.deep.equal([]);
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
    it("It should change 'state.viewSpot' when argument includes single spot.", () => {
      expect(state.viewSpot).to.deep.equal({});
      const spotData = {
        zoomSize: 3.5,
        center: { lat: 37.5, lng: -98.5 },
      };
      mutations.setViewSpot(state, spotData);
      expect(state.viewSpot).to.deep.equal(spotData);
    });
  });

  describe("setFilteredLocations", () => {
    it("It should change 'state.filteredLocations' when argument does not set.", () => {
      expect(state.filteredLocations).to.deep.equal([]);
      const filterData = [];
      mutations.setFilteredLocations(state, filterData);
      expect(state.filteredLocations).to.deep.equal(filterData);
    });
    it("It should change 'state.filteredLocations' when some data is filtered and result is one location.", () => {
      expect(state.filteredLocations).to.deep.equal([]);
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
    it("It should change 'state.currentView' to 'resultsPanel' when argument is 'resultsPanel'.", () => {
      expect(state.currentView).to.equal("filterPanel");
      const view = "resultsPanel";
      mutations.switchView(state, view);
      expect(state.currentView).to.equal("resultsPanel");
    });
    it("It should change 'state.currentView' to 'filterPanel' when argument is 'filterPanel'.", () => {
      expect(state.currentView).to.equal("resultsPanel");
      const view = "filterPanel";
      mutations.switchView(state, view);
      expect(state.currentView).to.equal("filterPanel");
    });
  });

  describe("updateFilters", () => {
    it("It should change 'state.currentFilters' when only state is filtered.", () => {
      expect(state.currentFilters).to.deep.equal({});
      const filterData = { state: "AL" };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("It should change 'state.currentFilters' when state and city is filtered.", () => {
      expect(state.currentFilters).to.deep.equal({ state: "AL" });
      const filterData = { state: "AL", city: "Clanton" };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("It should change 'state.currentFilters' when only Travel Stop(type) is filtered.", () => {
      expect(state.currentFilters).to.deep.equal({
        state: "AL",
        city: "Clanton",
      });
      const filterData = { type: ["Travel Stop"] };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("It should change 'state.currentFilters' when only Country Store(type) is filtered.", () => {
      expect(state.currentFilters).to.deep.equal({ type: ["Travel Stop"] });
      const filterData = { type: ["Country Store"] };
      mutations.updateFilters(state, filterData);
      expect(state.currentFilters).to.deep.equal(filterData);
    });
    it("It should change 'state.currentFilters' when state & city & Travel Stop(type) & Country Store(type) are  filtered.", () => {
      expect(state.currentFilters).to.deep.equal({ type: ["Country Store"] });
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
    it("It should change 'state.stateChosen' when state is selected.", () => {
      expect(state.stateChosen).to.equal(null);
      const chosenData = "WA";
      mutations.updateStateChosen(state, chosenData);
      expect(state.stateChosen).to.equal(chosenData);
    });
  });

  describe("updateCityChosen", () => {
    it("It should change 'state.cityChosen' when city is selected.", () => {
      expect(state.cityChosen).to.equal(null);
      const chosenData = "Tacoma";
      mutations.updateCityChosen(state, chosenData);
      expect(state.cityChosen).to.equal(chosenData);
    });
  });

  describe("updateHighwayChosen", () => {
    it("It should change 'state.highwayChosen' when highway is selected.", () => {
      expect(state.highwayChosen).to.equal(null);
      const chosenData = "I-65";
      mutations.updateHighwayChosen(state, chosenData);
      expect(state.highwayChosen).to.equal(chosenData);
    });
  });

  describe("updateStopTypes", () => {
    it("It should change 'state.stopTypes' when Travel Stop is selected.", () => {
      expect(state.stopTypes).to.deep.equal([]);
      const chosenData = ["Travel Stop"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("It should change 'state.stopTypes' when Country Store is selected.", () => {
      expect(state.stopTypes).to.deep.equal(["Travel Stop"]);
      const chosenData = ["Country Store"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("It should change 'state.stopTypes' when both types are selected.", () => {
      expect(state.stopTypes).to.deep.equal(["Country Store"]);
      const chosenData = ["Country Store", "Travel Stop"];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
    it("It should change 'state.stopTypes' when nothing is selected.", () => {
      expect(state.stopTypes).to.deep.equal(["Country Store", "Travel Stop"]);
      const chosenData = [];
      mutations.updateStopTypes(state, chosenData);
      expect(state.stopTypes).to.deep.equal(chosenData);
    });
  });
});
