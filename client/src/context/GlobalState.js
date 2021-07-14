import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
import Swal from 'sweetalert2';

// Initial state
const initialState = {
  transactions: [],
  total_balance: 0,
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(_id) {
    try {
      await axios.delete(`/api/v1/transactions/${_id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: _id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(`/api/v1/transactions`, transaction, config);
      Swal.fire({
        title: 'success',
        text: 'Transaction Added',
        icon: 'success',
        showConfirmButton: 'true',
      });
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function editTransaction(transaction, _id) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.put(`/api/v1/transactions/${_id}`, transaction, config);
      Swal.fire({
        title: 'success',
        text: 'Edit',
        icon: 'success',
        showConfirmButton: 'true',
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        total_balance: state.total_balance,
        getTransactions,
        editTransaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
