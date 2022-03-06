import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create the context
export const GlobalContext = createContext(initialState);


//Create the provider component
export const GlobalProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    //The provider component is the one that will be used to wrap the components that need access to the state
    
    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })

    }

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction
    }}>

        {children}
    </GlobalContext.Provider>);
}
