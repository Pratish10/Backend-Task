const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongo_uri, () => {
  console.log("Connected to Database");
}); 