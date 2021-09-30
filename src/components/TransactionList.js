import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.length > 0 ?
          transactions.map(transaction => (
            <li className={transaction.transactionType === 'income' ? 'plus' : 'minus'} key={transaction.id}>
              {transaction.text} <span>{transaction.transactionType === 'income' ? '+' : '-'} &#x20B9; {Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
            </li>
          )) : <div>No Transactions Available</div>
        }
        
      </ul>
    </>
  )
}
