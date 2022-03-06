
export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state, //copy the state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // check if the id of the transaction is not equal to the id of the transaction that is being deleted
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] // add the new transaction payload to the beginning of the array
            }

        default:
            return state;
    }
}
