import React from 'react'

export const Transaction = ({transaction}) => { //transaction is a prop that is passed from TransactionList component
  const sign = transaction.amount < 0 ? '-' : '+'; //if amount is negative, then sign is '-' else '+'
  return (
    <li className={transaction.amount < 0 ? 'minus': 'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
  </li>
  )
}
