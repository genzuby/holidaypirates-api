const express = require("express");
const router = express.Router();
const Hotels = require("../models/Hotels");
const dataset = require("./sampledata");

// Router information for Restful request
// Send every data from this collection.
router.get("/", async (req, res) => {
  try {
    // const hotels = await Hotels.find();
    // res.json(hotels);
    // just in case when mongon not connected(for test)
    res.json(dataset);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
