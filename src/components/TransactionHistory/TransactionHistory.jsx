import PropTypes from 'prop-types';
import {
  Transactions,
  TransactionsHead,
  TR,
  TH,
  TransactionsBady,
  TD,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Transactions>
      <TransactionsHead>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </TransactionsHead>
      <TransactionsBady>
        {transactions.map(({ type, id, amount, currency }) => (
          <TR key={id}>
            <TD>{type}</TD>
            <TD>{amount}</TD>
            <TD>{currency}</TD>
          </TR>
        ))}
      </TransactionsBady>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
};
