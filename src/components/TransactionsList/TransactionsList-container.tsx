/*eslint-disable react-hooks/exhaustive-deps*/

import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';

import { HeaderColsInterface, TransactionsListProps } from './types';
import { timestampToDate } from '../../helpers/helpers';
import useTransactionsListTableStyles from './TransactionsList-styles';
import { Transaction } from '../../types';
import Loader from '../loader';

const headerCols: HeaderColsInterface[] = [
  { id: 'amount', numeric: false, disablePadding: false, label: 'Amount' },
  { id: 'timestamp', numeric: false, disablePadding: false, label: 'Timestamp' },
  { id: 'exchange', numeric: false, disablePadding: false, label: 'Exchange rate' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Description' }
];

const TransactionList = (props: TransactionsListProps): React.ReactElement => {
  const {
    actions,
    match,
    status: { transactionsIsFetching },
    transactions,
    description
  } = props;

  const [walletHash] = useState(match.params.walletHash);
  const [dataSource] = useState(match.params.walletSource);
  const classes = useTransactionsListTableStyles();

  let [pageNumber, setPageNumber] = useState(1);

  const renderTransactionListHeader = (headerColumns: HeaderColsInterface[]) =>
    headerColumns.map((row: HeaderColsInterface) => (
      <TableCell
        key={`${row.id}${row.label}`}
        align={row.numeric ? 'right' : 'left'}
        padding={row.disablePadding ? 'none' : 'default'}
        className={classes.td}
      >
        {row.label}
      </TableCell>
    ));

  const renderTransactionListRows = (transactionsList: Transaction[]) => {
    if (!transactionsList.length) return 
    return transactionsList.map((row: Transaction, index: number) => (
      <TableRow key={`${row.timestamp}${index}`}>
        <TableCell className={classes.td}>{row.value}</TableCell>
        <TableCell className={classes.td} scope="row">{timestampToDate(row.timestamp)}</TableCell>
        <TableCell className={classes.td}>{row.gasPrice || 'no info'}</TableCell>
        <TableCell className={classes.td}>{description || 'no description'}</TableCell>
      </TableRow>
    ));
  }
    
  const handleScroll = (target: HTMLBodyElement) => {
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 30) {
      setPageNumber(pageNumber++);
    }
  };

  const checkWalletHashAndFetchTransactions = (walletHash: string, page: number, dataSource: string) =>
    walletHash && actions.fetchTransactions({ walletHash, page, dataSource});

  // on route change (when user clicked on bar-chart) - cleared transactions list and download the first page 
  // and on handleScroll fetch next page of transactions
  useEffect((): void => {
    checkWalletHashAndFetchTransactions(match.params.walletHash, pageNumber, dataSource);
   }, [pageNumber]);

   useEffect(() => {
    actions.flushTransactions();
    setPageNumber(1);
    checkWalletHashAndFetchTransactions(match.params.walletHash, pageNumber, dataSource);
   }, [match.params.walletHash])

  return (
    <Grid container className="Container">
      <Grid item xs={12} lg={12}>
        <Typography variant="h2" gutterBottom>
          Recent transactions
        </Typography>
      </Grid>
      <Grid container spacing={9} className="Container">
        <Grid item xs={12} lg={12} className={classes.grid}>
          <Table>
            <TableHead className={classes.thead}>
              <TableRow>{renderTransactionListHeader(headerCols)}</TableRow>
            </TableHead>
            <TableBody
              onScroll={(e: any) => handleScroll(e.target)}
              id="transactionsListTableBody"
              className={classes.tbody}>{renderTransactionListRows(transactions)}</TableBody>
          </Table>
          <Loader isLoading={transactionsIsFetching} fullPage={false} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(TransactionList);
