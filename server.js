const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/budget'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true ,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
console.log(PORT)
app.listen(PORT, () => {
  console.log(`App running on => http://localhost:${PORT}`);
});