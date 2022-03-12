const express = require('express'); // Express web server framework
const dotenv = require('dotenv'); // Load environment variables from .env file
const colors = require('colors'); // Colorize console output
const morgan = require('morgan'); // HTTP request logger middleware for node.js

dotenv.config({ path: './config/conifg.env' }); // Load environment variables from .env file

const transactions = require('./routes/transactions'); // Import the transactions router

const app = express();

app.use('/api/v1/transactions', transactions); // Use the transactions router

app.get('/', (req,res) => res.send('Hello'));   // GET request to / returns Hello

const PORT = process.env.PORT || 5000;  // Get port from environment and store in Express.
app.listen(PORT, console.log
    (`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)); // Listen on port 5000

