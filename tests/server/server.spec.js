/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const config = require("../../.config");
const knex = require("knex")(config.db);
const data = require("../../data/locations.json");
const app = require("../../server/app");

describe("locations", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });
  describe("setup", () => {
    it("able to connect to database", () =>
      knex
        .raw("select 1+1 as result")
        .catch(() => assert.fail("unable to connect to db")));

    it("has run the initial migrations", () =>
      knex("locations")
        .select()
        .catch(() => assert.fail("locations table is not found.")));
  });
  describe("get", () => {
    it("should return full list of locations", async () => {
      const res = await request.get("/api/locations");
      const text = res.body.map((x) => x.latitude);
      text.length.should.deep.equal(data.map((x) => x.Site.Latitude).length);
    });
  });
});
