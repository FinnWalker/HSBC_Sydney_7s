const groupModel = require("../models/groupModel");
const sanitize = require("mongo-sanitize");

module.exports = {
  create: function(req, res) {
    groupModel.create({}, function(err, group) {
      if (err) {
        res.status(500).json({ message: "Error creating group" });
      } else {
        res.status(200).json({ group });
      }
    });
  },
  addIndividual: function(req, res) {
    const position = sanitize(req.body.position);
    const individual_id = sanitize(req.body.individual_id);
    const group_id = sanitize(req.body.group_id);
    if (position && individual_id && group_id) {
      groupModel.findOne({ _id: group_id }, function(err, group) {
        if (err) {
          res.status(500).json({ message: "Error creating group" });
        } else if (group) {
          switch (position) {
            case "0":
              group.individual_0 = individual_id;
              break;
            case "1":
              group.individual_1 = individual_id;
              break;
            case "2":
              group.individual_2 = individual_id;
              break;
            case "3":
              group.individual_3 = individual_id;
              break;
            case "4":
              group.individual_4 = individual_id;
              break;
            case "5":
              group.individual_5 = individual_id;
              break;
            case "6":
              group.individual_6 = individual_id;
              break;
          }
          group.save().then(() => {
            res.status(200).json({ group });
          });
        }
      });
    } else {
      res.status(400).json({ message: "Please include all fields" });
    }
  }
};
