import { numberWithCommas } from '../utils/format';

import { Link } from 'react-router-dom';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <Link to={`detail/${transaction._id}`}>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <div>
          <h1>{transaction.text}</h1>
          <p className="text-sm text-gray-400">{transaction.description}</p>
        </div>
        <span>
          {sign}
          {numberWithCommas(Math.abs(transaction.amount))}
        </span>
      </li>
    </Link>
  );
};
