import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => { //transaction is a prop that is passed from TransactionList component
  const { deleteTransaction } = useContext(GlobalContext); // get the deleteTransaction function from GlobalContext

  const sign = transaction.amount < 0 ? '-' : '+'; //if amount is negative, then sign is '-' else '+'
  return (
    <li className={transaction.amount < 0 ? 'minus': 'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => //Delete the transaction when the button is clicked
    deleteTransaction(transaction.id)} className="delete-btn">x</button>
    

  </li>
  )
}
