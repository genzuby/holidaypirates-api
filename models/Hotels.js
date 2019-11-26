const mongoose = require("mongoose");

const PriceSchema = mongoose.Schema({
  season: String,
  month: [Number],
  seasonPirce: Number
});

const HotelsSchema = mongoose.Schema({
  hotelId: String,
  hotelName: String,
  rate: Number,
  location: String,
  hotelDesc: String,
  mainimg: String,
  price: [PriceSchema]
});

// collection name : surveyitems
module.exports = mongoose.model("hotels", HotelsSchema);
