import { takeEvery } from 'redux-saga/effects';

import authActions from '../../actions/auth';

import {
  doAuthUser,
  doAuthUserLogout,
  doAuthUserForgotPassword,
  doAuthCheck
} from './user';

export default function* watchAuth() {
  yield takeEvery(authActions.AUTH_USER, doAuthUser);
  yield takeEvery(authActions.AUTH_USER_SIGNUP_SUCCESS, doAuthUser);
  yield takeEvery(authActions.AUTH_USER_LOGOUT, doAuthUserLogout);
  yield takeEvery(authActions.AUTH_USER_FORGOT_PASSWORD, doAuthUserForgotPassword);
  yield takeEvery(authActions.AUTH_CHECK, doAuthCheck);
}