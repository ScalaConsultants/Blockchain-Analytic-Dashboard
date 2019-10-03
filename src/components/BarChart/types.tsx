import { Wallet, Wallets } from '../../types';

export interface ViewProps {
  data: React.ReactElement<'div'>[];
};

export interface Accumulator {
  position: number,
  elements: React.ReactElement<'div'>[]
}

export interface BarChartActions {
  fetchEthereumTransactions: Function
}

export interface BarChartProps {
  wallets: Wallet[],
  width: number,
  actions: BarChartActions
}

export interface State {
  ethereum: Wallets
}