import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const EditTransaction = ({ _id }) => {
  console.log('edit', _id);
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  let history = useHistory();

  const { editTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      description,
      amount: +amount,
    };

    editTransaction(newTransaction, _id);
    history.push('/');
  };

  return (
    <>
      <h3 className="text-center">Edit transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="mt-4 text-center bg-indigo-900 w-full text-white py-4">
          Update
        </button>
      </form>
    </>
  );
};
