import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/UserModels';
import * as APIs from '../apis/userApis';
import { 
  loginAction,
  logoutAction,
  loginMonitoringAction
 } from "../actions/userActions";


export function* runLogin () {
  const handler = APIs.login;
  const {loginUser, error} = yield call(handler);
  if (loginUser && !error) {
    console.log('login Saga OK');
    yield put(loginAction.success(loginUser));
  } else {
    console.log('login Saga NG');
    yield put(loginAction.failure());
  };
}

export function* runLogout () {
  const handler = APIs.logout;
  const {success, error} = yield call(handler);
  if (success && !error) {
    console.log('logout Saga OK');
    yield put(logoutAction.success());
  } else {
    console.log('logout Saga NG');
    yield put(logoutAction.failure());
  };
}

export function* runLoginMonitoring () {
  const handler = APIs.loginMonitoring;
  const {userInfo, error} = yield call(handler)
  if (userInfo && !error) {
    console.log("login monitoring OK");
    yield put(loginMonitoringAction.success(userInfo))
  } else {
    console.log("login monitoring NG");
    yield put(loginMonitoringAction.failure())
  }
}

export function* watchUers () {
  yield takeEvery(ActionTypes.LOGIN_START, runLogin);
  yield takeEvery(ActionTypes.LOGOUT_START, runLogout);
  yield takeLatest(ActionTypes.LOGIN_STATUS_MONITORING_START, runLoginMonitoring)
}

export default function* rootSaga () {
  yield all([fork(watchUers)])
}