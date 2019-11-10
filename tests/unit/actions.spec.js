import { expect } from "chai";
import { actions } from "@/vuex/actions";
import sinon from "sinon";
import axios from "axios";

describe("loadMarker", () => {
  afterEach(() => {
    sinon.restore();
  });
  const locations = [
    {
      address: "3771 S Hwy 231 ",
      city: "Ozark",
      def: "70",
      exit: "12",
      fax: "(334) 445-0390",
      highway: "HWY 231",
      id: 3035,
      latitude: 31.4273,
      longitude: -85.6198,
      name: "FlyingK Travel Stop 566",
      parking: "70",
      state: "AL",
      tell: "(334) 445-0323",
      type: "Travel Stop",
      zip: "36360",
    },
  ];
  it("Should be commit setLocations and setMarkers", (done) => {
    sinon.stub(axios, "get").returns({ data: locations });
    const commit = sinon.spy();
    actions.loadMarkers({ commit }).then(() => {
      expect(commit.withArgs("setLocations", locations).called).to.be.true;
      expect(commit.withArgs("setMarkers", locations).called).to.be.true;
      done();
    });
  });
});
