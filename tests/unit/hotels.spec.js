const mongoose = require("mongoose");
const Hotels = require("../../models/Hotels");
const dbconfig = require("../../dbconfig");

const MONGO_URI = dbconfig.MONGODB;

describe("Hotels mongoose test", () => {
  // connection DB
  beforeAll(async () => {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Disconnect Mongoose
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Shoud have a module", () => {
    expect(Hotels).toBeDefined();
  });

  describe("Get Hotels data", () => {
    it("Should have a item", async () => {
      expect.assertions(1);
      const hotels = await Hotels.find();
      expect(hotels.length).toBe(1);
    });

    it("Should have a hotelId", async () => {
      expect.assertions(1);
      const hotels = await Hotels.find();
      expect(hotels[0].hotelId).toBeTruthy();
    });
  });
});
