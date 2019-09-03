import { FetchTransactionsAction, ActionType } from "../../types";

export const BLOKCHAIN_FETCH_TRANSACTIONS = "BLOKCHAIN_FETCH_TRANSACTIONS";
export const BLOKCHAIN_FLUSH_TRANSACTIONS = "BLOKCHAIN_FLUSH_TRANSACTIONS";
export const BLOKCHAIN_SET_TRANSACTIONS = "BLOKCHAIN_SET_TRANSACTIONS";
export const BLOKCHAIN_FETCH_MORE_TRANSACTIONS =
  "BLOKCHAIN_FETCH_MORE_TRANSACTIONS";
export const BLOKCHAIN_SET_MORE_TRANSACTIONS =
  "BLOKCHAIN_SET_MORE_TRANSACTIONS";
export const BLOKCHAIN_SUM_TRANSACTIONS = "BLOKCHAIN_SUM_TRANSACTIONS";

export const BLOKCHAIN_FILTER_TRANSACTIONS = 'BLOKCHAIN_FILTER_TRANSACTIONS';

export const BlokchainFlushTransactions = (): ActionType => ({
  type: BLOKCHAIN_FLUSH_TRANSACTIONS
});

export const BlokchainFetchTransactions = (): ActionType => ({
  type: BLOKCHAIN_FETCH_TRANSACTIONS
});

export const BlokchainSetTransactions = (
  transactions: any
): FetchTransactionsAction => ({
  type: BLOKCHAIN_SET_TRANSACTIONS,
  transactions: transactions
});

export const BlockchainFilterTransactions = (
  blokchain: any
): any => ({
  type: BLOKCHAIN_FILTER_TRANSACTIONS,
  transactions: blokchain
});

export const BlokchainFetchMoreTransactions = (): ActionType => ({
  type: BLOKCHAIN_FETCH_MORE_TRANSACTIONS
});

export const BlokchainSetMoreTransactions = (transactions: any): any => ({
  type: BLOKCHAIN_SET_MORE_TRANSACTIONS,
  transactions: transactions
});
