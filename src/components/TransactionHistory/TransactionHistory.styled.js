import styled from 'styled-components';

export const Transactions = styled.table`
  margin: 0 auto 20px auto;

  width: 80%;
  text-align: center;
  box-shadow: 5px 5px 12px 2px #96b8d4;
`;

export const TransactionsHead = styled.thead`
  background-color: #89a1e0;
`;

export const TR = styled.tr`
  height: 40px;
`;

export const TH = styled.th`
  color: ${p => p.theme.colors.white};
`;

export const TransactionsBady = styled.tbody`
  background-color: #fffcad;

  tr:nth-child(odd) {
    background-color: #d2deff;
  }
`;

export const TD = styled.td`
  color: ${p => p.theme.colors.secondaryText};
  text-transform: capitalize;
`;
