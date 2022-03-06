import React from 'react'

export const Transaction = ({transaction}) => { //transaction is a prop that is passed from TransactionList component
  return (
    <li className="minus">
    {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
  </li>
  )
}
