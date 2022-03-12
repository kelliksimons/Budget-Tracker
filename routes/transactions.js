const express = require('express'); // Express web server framework
const router = express.Router(); // Express router

router.get('/', (req, res) => res.send('Hello')); // GET request to / returns Hello

module.exports = router;   // Export the router
