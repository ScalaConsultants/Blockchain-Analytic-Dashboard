import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as blockchainActions from '../../actions/tezos/wallets';
import { Wallets } from '../../../types';

async function fetchWallets( {limit = 10, groupBy = 'buyer', from = 1567296000, to = 1567382400} ): Promise<Wallets> {
  let url = `api/v1/tezos/wallets?groupBy=${groupBy}&limit=${limit}&from=${from}&to=${to}`;

  if (groupBy === 'data') {
    url = `api/v1/tezos/data-wallets?limit=${limit}&from=${from}&to=${to}`;
  };

  const response = await doGet(url);

  return response.json();
}

function* foFetchWallets(action: any) {
  const { payload } = action;
  const {
    TEZOS_FETCH_WALLETS_FAILED,
    TEZOS_FETCH_WALLETS_STARTED,
    TEZOS_FETCH_WALLETS_SUCCEEDED,
    TEZOS_SET_WALLETS
  } = blockchainActions;

  yield put({ type: TEZOS_FETCH_WALLETS_STARTED });

  const wallets = yield fetchWallets(payload);

  try {
    if (wallets.length >= 0) {
      yield put({
        type: TEZOS_SET_WALLETS,
        wallets
      });
    }
    yield put({ type: TEZOS_FETCH_WALLETS_SUCCEEDED });
  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: TEZOS_FETCH_WALLETS_FAILED, message: e.code});
  }
}

export function* watchDoFetchWallets() {
  yield takeEvery(blockchainActions.TEZOS_FETCH_WALLETS, foFetchWallets);
}
