const request = require("supertest");
const { app, server } = require("./../server");
const CONSTANTS = require("./../constants");
const TEST_USERS = require("./../data/users.json");
const TEST_ITEMS = require("./../data/items.json");
const TEST_STORES = require("./../data/stores.json");

describe("API POST Data", () => {
  it("should get TEST_USER details", async () => {
    const testUser = TEST_USERS[0];
    const res = await request(app).post("/api/user").send({
      "user-id": testUser["user-id"],
    });
    expect(res.statusCode).toEqual(CONSTANTS.HTTP_SUCCESS);
    for (let field in testUser) {
      expect(res.body).toHaveProperty(field, testUser[field]);
    }
  });
  it("should get TEST_ITEM details", async () => {
    const testItem = TEST_ITEMS[0];
    const res = await request(app).post("/api/item").send({
      "merchant-id": testItem["merchant-id"],
      barcode: testItem["barcode"],
    });
    expect(res.statusCode).toEqual(CONSTANTS.HTTP_SUCCESS);
    for (let field in testItem) {
      expect(res.body).toHaveProperty(field, testItem[field]);
    }
  });
  it("should get TEST_STORE details", async () => {
    const testStore = TEST_STORES[0];
    const res = await request(app).post("/api/store").send({
      "store-id": testStore["store-id"],
    });
    expect(res.statusCode).toEqual(CONSTANTS.HTTP_SUCCESS);
    for (let field in testStore) {
      expect(res.body).toHaveProperty(field, testStore[field]);
    }
  });
  it("should display list of nearby stores", async () => {
    const testLoc = {
      latitude: 1.3591432,
      longitude: 103.8781964,
    };
    const res = await request(app).post("/api/store/list").send({
      distance: 10000,
      latitude: testLoc["latitude"],
      longitude: testLoc["longitude"],
    });
    expect(res.statusCode).toEqual(CONSTANTS.HTTP_SUCCESS);
    // We should have 2 stores within a 10km radius
    const expectedStores = ["WPANCUD-1", "WPANCUD-3"];
    expect(res.body).toHaveLength(expectedStores.length);
    expect(
      res.body.every((store) => expectedStores.includes(store["store-id"]))
    ).toBe(true);
  });
  it("should display list of items given barcodes", async () => {
    const testMerchant = "WPANCUD";
    const testBarcodes = TEST_ITEMS.filter(
      (item) => item["merchant-id"] === testMerchant
    ).map((item) => item["barcode"]);
    const res = await request(app).post("/api/item/list").send({
      "merchant-id": testMerchant,
      barcode: testBarcodes,
    });
    expect(res.statusCode).toEqual(CONSTANTS.HTTP_SUCCESS);
    expect(res.body).toHaveLength(testBarcodes.length);
    expect(
      res.body.every((item) => testBarcodes.includes(item["barcode"]))
    ).toBe(true);
  });
});

server.close();