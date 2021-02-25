const router = require('express').Router();
const apiRoutes = require('./api');

// REFERENCE TO API FOLDER/DIRECTORY
router.use("/api", apiRoutes);


module.exports = router;
