const individualModel = require("../models/individualModel");
const sanitize = require("mongo-sanitize");

module.exports = {
    get: function(req, res) {
        const individual_id = sanitize(req.body.individual_id);

        if(individual_id) {
            individualModel.find({_id: individual_id}, (err, individual) => {
                if(err) {
                    res.status(500).json({ message: "Error finding individual" });
                } else if (individual) {
                    res.status(200).json(individual);
                } else {
                    res.status(200).json({ message: "Individual not found" });
                }
            })
        } else {
            res.status(400).json({ message: "Please include individual_id" });
        }
    },
    create: function(req, res) {
      const first_name = sanitize(req.body.first_name);
      const last_name = sanitize(req.body.last_name);
      const email = sanitize(req.body.email);
      const postcode = sanitize(req.body.postcode);

      if (first_name && last_name && email && postcode) {
        individualModel.create(
          { first_name, last_name, email, postcode },
          function(err, individual) {
            if (err) {
              res.status(500).json({ message: "Error creating individual" });
            } else {
              res.status(200).json({ "id": individual._id });
            }
          }
        );
      } else {
        res.status(400).json({ message: "Please include all fields" });
      }
    }
}