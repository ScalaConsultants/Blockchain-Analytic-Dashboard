import React from 'react';
import { useDispatch } from 'redux-react-hook';

import * as walletActions from '../../store/actions/blockchain/wallets';

import FiltersContainer from './DashboardFilters-container';

const initState: any = {
  blockchains: ['ETH'],
  topList: '10',
  zoom: '1 day',
  groupBy: 'buyer'
}

const FiltersRedux = (state = initState) => {
  const dispatch = useDispatch();

  
  const fetchEthereumWallets = (payload: any = 1): void => {
    dispatch({
      type: walletActions.FETCH_WALLETS,
      payload: payload
    });
  };

  const actions = {
    fetchEthereumWallets
  };

  return (
    <FiltersContainer actions={actions} />
  );
};

export default FiltersRedux;
