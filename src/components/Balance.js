
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext); // get the transactions array from the GlobalContext
    const amounts = transactions.map(transaction => transaction.amount); //map through the transactions and get the amount
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //reduce the amount and get the total
    
    return (
    <>
        <h4>Your Balance</h4>
        <h1>${ total }</h1> 
    </>
  )
}
