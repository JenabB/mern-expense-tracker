import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="bg-indigo-900 w-full p-10 pb-20 text-white">
      <h4>Your Balance</h4>
      <h1 className="text-2xl font-bold">Rp {numberWithCommas(total)}</h1>
      <div className="mt-4">
        {total <= 0 ? (
          <h1>Harus bisa atur keuangan ya :)</h1>
        ) : (
          <h1>Semangat atur keuangannya :)</h1>
        )}
      </div>
    </div>
  );
};
