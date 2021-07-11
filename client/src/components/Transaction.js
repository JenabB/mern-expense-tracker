import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import Swal from 'sweetalert2';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTransaction(transaction._id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}
        {numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button onClick={handleDelete} className="delete-btn">
        x
      </button>
    </li>
  );
};
