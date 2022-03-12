const express = require('express'); // Express web server framework
const router = express.Router(); // Express router
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactionController'); // Import the transactions controller

router
.route('/') 
.get(getTransactions)
.post(addTransaction); // Add a transaction

router
    .route('/:id')
    .delete(deleteTransaction); // Delete a transaction


module.exports = router;   // Export the router
