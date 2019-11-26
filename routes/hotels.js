const express = require("express");
const router = express.Router();
const Hotels = require("../models/Hotels");

// Router information for Restful request
// Send every data from this collection.
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.json(hotels);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
