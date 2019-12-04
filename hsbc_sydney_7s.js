const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/hsbc_sydney_7s";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use("/", express.static("public"));

function verifyRequest(req, res, next) {
  if (req.headers["accesskey"] === "landMark&2") {
    next();
  } else {
    console.log(req.headers);
    res.status(400).json({ message: "Access denied" });
  }
}

const groupController = require("./controllers/groupController.js");
app.post("/hsbc_sydney_7s/group", verifyRequest, groupController.create);

const individualController = require("./controllers/individualController.js");
app.post("/hsbc_sydney_7s/individual", verifyRequest, individualController.create);

const port = 6632;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});