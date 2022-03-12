import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: [] // transactions array  - this is the state of the app without any input
}

//Create the context
export const GlobalContext = createContext(initialState);


//Create the provider component
export const GlobalProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    //The provider component is the one that will be used to wrap the components that need access to the state
    
    //Actions
    function deleteTransaction(id) { //deleteTransaction function
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })

    }
    function addTransaction(transaction) { //addTransaction function
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })

    }

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>

        {children}
    </GlobalContext.Provider>);
}

