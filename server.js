const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Data = require('./data');

const app = express();
const port = 5000;

app.use(cors()); // DISABLE FOR PROD
app.use(bodyParser.json());


app.listen(port, () => {
  console.log("Server started on port " + port);
});
