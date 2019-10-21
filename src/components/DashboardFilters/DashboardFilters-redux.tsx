import React from 'react';
import { useDispatch } from 'redux-react-hook';

import { getWalletByDatasource } from '../../store/actions/blockchainSelectors';

import FiltersContainer from './DashboardFilters-container';

const FiltersRedux = () => {
  const dispatch = useDispatch();
  
  const fetchWalletsByBlockchain = (payload: number = 1, blockchain:string): void => {
    dispatch({
      type: getWalletByDatasource(blockchain),
      payload: payload
    });
  };

  const actions = {
    fetchWalletsByBlockchain,
  };

  return (
    <FiltersContainer actions={actions} />
  );
};

export default FiltersRedux;
