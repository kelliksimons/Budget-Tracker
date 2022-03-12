import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const AddTransactions = () => {
    
    const [text, setText] = useState('') // text is the value of the input field
    const [amount, setAmount] = useState(0) // amount is the value of the input field
    const { addTransaction } = useContext(GlobalContext); // get the addTransaction function from GlobalContext

    const onSubmit = e =>{ // onSubmit function is called when the form is submitted 
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount // +amount is used to convert the string to a number
        }
        addTransaction(newTransaction);
    }
  return (
    <> 
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> {/*The value of the input field is stored in the state variable text*/}
          
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" value = {amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." /> {/*The value of the input field is stored in the state variable amount*/}
        </div>
        <button className="btn">Add transaction</button>
      </form>

      </>
  )
}
