import { Wallet } from './types';
export const GET_WALLETS_LIST = 'GET_WALLETS_LIST';
export const SET_WALLETS_LIST = 'SET_WALLETS_LIST';

export const GET_WALLETS_LIST_USER = 'GET_WALLETS_LIST_USER';
export const SET_WALLETS_LIST_USER = 'SET_WALLETS_LIST_USER';

export const EDIT_WALLETS_LIST_USER = 'EDIT_WALLETS_LIST_USER';
export const EDIT_WALLETS_LIST = 'EDIT_WALLETS_LIST';

export const getWalletsList = () => ({
    type: GET_WALLETS_LIST,
});

export const setWalletsList = (data: Wallet[]) => ({
    type: SET_WALLETS_LIST,
    data
});

export const getWalletsListUser = () => ({
    type: GET_WALLETS_LIST_USER,
});

export const setWalletsListUser = (data: Wallet[]) => ({
    type: SET_WALLETS_LIST_USER,
    data
});

export const editWalletsListUser = (data: Wallet) => ({
    type: EDIT_WALLETS_LIST_USER,
    data
});

export const editWalletsList = (data: Wallet) => ({
    type: EDIT_WALLETS_LIST_USER,
    data
});