const router = require('express').Router();
const dbRoutes = require('./dbRoutes');

// REFERENCE BOTH DB AND FOURSQUARE ROUTES
router.use('/dbRoutes', dbRoutes);

module.exports = router;