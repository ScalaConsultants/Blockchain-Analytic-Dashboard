import { combineReducers } from "redux";
import { ETHEREUM_FETCH_TRANSACTIONS_FAILED } from '../actions/ethereum/transactions';
import { ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED } from '../actions/ethereum/transactions-summed';
import { ETHEREUM_FETCH_WALLETS_FAILED } from '../actions/ethereum/wallets';
import { TEZOS_FETCH_TRANSACTIONS_FAILED } from '../actions/tezos/transactions';
import { CLEAR_NOTIFICATION_ERROR } from '../actions/notifications';

import { NotificationMessage } from '../../components/Notification/types';

const errorCodes = {
  '401': 'There was a problem with your permissions.',
  '403': 'You don\'t have proper permissions to perform this operation.',
  '404': 'Page not found.',
  '500': 'The connection to server failed. Please try again later.',
  'default': 'Sorry, we encountered a problem. Please try again later.'
};

const initState: [] = [];

const createRandomID = (notificationType: string) =>
  `${notificationType}-${Math.random().toString(36).substring(2, 15) + 
  Math.random().toString(36).substring(2, 15)}`;

const filterNotifications = (notifications: [], omittedID: string) => (
  notifications.filter((notification: NotificationMessage) => notification.id !== omittedID)
);

const newNotification = (type: string, code: string) => ({
  // @ts-ignore
  description: errorCodes[code] || errorCodes.default,
  type,
  id: createRandomID(type)
});

const errors = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED:
    case ETHEREUM_FETCH_WALLETS_FAILED:
    case TEZOS_FETCH_TRANSACTIONS_FAILED:
      return [...state, newNotification('error', action.code)];
    case CLEAR_NOTIFICATION_ERROR:
      return filterNotifications(state, action.notificationID);
    default:
      return state;
  }
};

export default combineReducers({
  errors
});