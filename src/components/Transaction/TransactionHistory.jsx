import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={css.tbody_td}>
      <td className={`${css.td_type}  ${css.body_td}`}>{type}</td>
      <td className={css.body_td}>{amount}</td>
      <td className={css.body_td}>{currency}</td>
    </tr>
  ));
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.head_th}>Type</th>
          <th className={css.head_th}>Amount</th>
          <th className={css.head_th}>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
