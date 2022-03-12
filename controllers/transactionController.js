//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public

exports.getTransactions = (req, res, next) => { // Get all transactions
 res.send('GET transactions');   
}

//@desc ADD transactions
//@route POST /api/v1/transactions
//@access Public

exports.addTransaction = (req, res, next) => { // Add a transaction
    res.send('POST transaction');   
   }

//@desc DELETE transactions
//@route DELETE /api/v1/transactions/:id
//@access Public

exports.deleteTransaction = (req, res, next) => { // Delete a transaction
    res.send('DELETE transaction');   
   }