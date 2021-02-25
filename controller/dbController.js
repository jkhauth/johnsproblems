const db = require('../models');
const router = require('express').Router();


// DEFINING METHODS FOR THE DB CONTROLLER TO REFERENCE IN DB ROUTES
module.exports = {
       // FIND ALL VENUES IN DB
    findAllProblems: function (req, res) {
        db.Problems
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
