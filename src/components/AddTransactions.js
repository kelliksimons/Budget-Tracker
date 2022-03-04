import React, {useState} from 'react'

export const AddTransactions = () => {
    const [text, setText] = useState('') // text is the value of the input field
    const [amount, setAmount] = useState(0) // amount is the value of the input field
  return (
    <> 
    <h3>Add new transaction</h3>
      <form>
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
