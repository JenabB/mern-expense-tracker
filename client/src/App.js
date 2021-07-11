import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import FloatingActionButton from './components/FloatingActionButton';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <FloatingActionButton />
      </div>
    </GlobalProvider>
  );
}

export default App;
