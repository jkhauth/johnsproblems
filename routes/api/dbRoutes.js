const router = require('express').Router();
const dbController = require('../../controller/dbController');
const db = require('../../models');

// get all problems from db
router.route('/problems')
.get(dbController.findAllProblems);

// all routes to manipulate venue data by id
// router.route('/venue/:id')
// .get(dbController.findByIdVenue)
// .post(dbController.createVenue)

// create or find venue by name
// router.route('/problem/:name')
// .get(dbController.findByProblemName)

module.exports = router