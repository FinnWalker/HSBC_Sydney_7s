const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IndividualSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  postcode: String
});

module.exports = mongoose.model("Individual", IndividualSchema);