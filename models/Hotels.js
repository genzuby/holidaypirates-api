const mongoose = require("mongoose");

const HotelsSchema = mongoose.Schema({
  hotelId: {
    type: String,
    required: true
  },
  hotelName: {
    type: String,
    required: true
  },
  rate: {
    type: Number
  },
  location: {
    type: String
  },
  hotelDesc: {
    type: String
  },
  price: [
    {
      season: {},
      month: {},
      seasonPirce:{}
    }
  ]
});

// collection name : surveyitems
module.exports = mongoose.model("hotels", HotelsSchema);
