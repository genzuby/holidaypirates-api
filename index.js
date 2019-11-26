const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const serverless = require("serverless-http");
const dbconfig = require("./dbconfig");

const app = express();
const hotelsRoute = require("./routes/hotels");

// allow cross-origin requests
app.use(cors());

// josn parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/hotels", hotelsRoute);

const MONGO_URI = dbconfig.MONGODB;

if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

// connect mongoose with holidaypirates db
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// Listening server
app.listen(4000, () => {
  console.log("now listening fro requests on port 4000");
});

// module.exports.handler = serverless(app);
