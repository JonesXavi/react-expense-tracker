import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('income');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let tempAmount = 0;

    if(transactionType === 'income') {
      tempAmount = '+'+ amount;
    } else {
      tempAmount = '-'+ amount;
    }

    const newTransaction = {
      id: uuidv4(),
      transactionType,
      text,
      amount: +tempAmount
    }
    addTransaction(newTransaction);
    setTransactionType('income');
    setText('');
    setAmount(0);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <div>Type</div>
          <label htmlFor="income" className="form-label">
            <input id="income" value="income" name="transactionType" label="Income" type="radio" onChange={(e) => setTransactionType(e.target.value)} checked={transactionType === 'income'} className="form-label" />
            Income
          </label>
          <label htmlFor="expense">
            <input id="expense" value="expense" name="transactionType" label="Expense" type="radio" onChange={(e) => setTransactionType(e.target.value)} checked={transactionType === 'expense'} className="form-label" />
            Expense
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
