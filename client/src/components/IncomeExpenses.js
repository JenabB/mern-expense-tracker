import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="flex justify-evenly text-white text-center">
      <div className="bg-green-500 w-full p-4">
        <h4>Income</h4>
        <p className="">Rp {numberWithCommas(income)}</p>
      </div>
      <div className="bg-red-500 w-full p-4">
        <h4>Expense</h4>
        <p className="">Rp -{numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};
