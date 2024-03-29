import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

import { fetchTransactionsByDatasource, flushTransactionstByDatasource } from '../../store/actions/blockchainSelectors';
import { getBlockchainByDatasource } from '../../store/reducers/blockchainSelectors';

import TransactionListContainer from './TransactionsList-container';
import { State } from './types';
import { Transactions, TransactionsData } from '../../types';

const TransactionListRedux = (props: any) => {
  const blockchain = props.match.params.walletSource;

  const mapState = (state: State): Transactions => ({
    status: getBlockchainByDatasource(state, blockchain).status,
    transactions: getBlockchainByDatasource(state, blockchain).transactions
  });

  const dispatch = useDispatch();

  const fetchTransactions = (transactionsData: TransactionsData): void => {
    dispatch({
      type: fetchTransactionsByDatasource(transactionsData.dataSource),
      transactionsData
    });
  };

  const flushTransactions = (blockchain: string): void => {
    dispatch({
      type: flushTransactionstByDatasource(blockchain),
    });
  };

   const { status, transactions } = useMappedState(mapState);

  const actions = {
    fetchTransactions,
    flushTransactions
  };

  return (
    <TransactionListContainer
      actions={actions}
      description={props.description}
      status={status}
      transactions={transactions}
      page={1}
      params={props.match.params}
    />
  );
};

export default withRouter(TransactionListRedux);
