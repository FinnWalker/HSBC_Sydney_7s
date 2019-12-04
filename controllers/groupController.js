const groupModel = require("../models/groupModel");
const sanitize = require("mongo-sanitize");

module.exports = {
  create: function(req, res) {
    groupModel.create({ }, function(
      err,
      group
    ) {
      if (err) {
        res.status(500).json({ message: "Error creating group" });
      } else {
        res.status(200).json({ group });
      }
    });
  }
};
