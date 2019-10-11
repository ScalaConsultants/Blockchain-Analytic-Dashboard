import { combineReducers } from "redux";
import { ETHEREUM_FETCH_TRANSACTIONS_FAILED, ETHEREUM_FETCH_TRANSACTIONS } from '../actions/ethereum/transactions';
import { CLEAR_NOTIFICATION_ERROR } from '../actions/notifications';

const initState: Array<object> = [];

const createRandomID = (notificationType: string) => `${notificationType}-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`

const filterNotifications = (notifications: [], omittedID: string) => (
  // @ts-ignore
  notifications.filter((notification: object) => notification.id !== omittedID)
);

const errors = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS:
      return  [
        {
          description: 'Test errora 1',
          type: 'error',
          id: createRandomID('error')
        },
        {
          description: 'Test errora 2',
          type: 'error',
          id: createRandomID('error')
        },
        {
          description: 'Test errora 3',
          type: 'error',
          id: createRandomID('error')
        }
      ];
    case CLEAR_NOTIFICATION_ERROR:
      // @ts-ignore

      console.log("RESUUULT", action.notificationID,  filterNotifications(state, action.notificationID));

      // @ts-ignore
      // return filterNotifications(state, action.data.notificationID);
      return filterNotifications(state, action.notificationID);
    default:
      // return state;
      return state;
  }
};

const infos = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS:
      return  [
        {
          description: 'Test info 1',
          type: 'info',
          id: createRandomID('info')
        }
      ];
    default:
      return state;
  }
};

const successes = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
    case ETHEREUM_FETCH_TRANSACTIONS:
      return  [
        {
          description: 'Test success 1',
          type: 'success',
          id: createRandomID('success')
        },
        {
          description: 'Test success 2',
          type: 'success',
          id: createRandomID('success')
        }
      ];
    default:
      return state;
  }
};

export default combineReducers({
  errors,
  successes,
  infos
});
