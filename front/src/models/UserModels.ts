import * as ActionTypes from "../constants/actionTypes";

export interface UserState {
  isLoading: boolean;
  user: LoginUser;
}

export interface LoginUser {
  id: string;
  name: string;
  email: string;
}

// ログイン
export interface loginStart {
  type: typeof ActionTypes.LOGIN_START
}

export interface loginSuccess {
  type: typeof ActionTypes.LOGIN_SUCCESS
  payload: LoginUser
}

export interface loginFailure {
  type: typeof ActionTypes.LOGIN_FAILURE
}

// ログアウト
export interface logoutStart {
  type: typeof ActionTypes.LOGOUT_START
}

export interface logoutSuccess {
  type: typeof ActionTypes.LOGOUT_SUCCESS
  payload: LoginUser
}

export interface logoutFailure {
  type: typeof ActionTypes.LOGOUT_FAILURE
}

// ログイン状態の監視
export interface logoutMonitoringStart {
  type: typeof ActionTypes.LOGIN_STATUS_MONITORING_START
}

export interface logoutMonitoringSuccess {
  type: typeof ActionTypes.LOGIN_STATUS_MONITORING_SUCCESS
  payload: LoginUser
}

export interface logoutMonitoringFailure {
  type: typeof ActionTypes.LOGIN_STATUS_MONITORING_FAILURE
}

export type userAction =
  | loginStart
  | loginSuccess
  | loginFailure
  | logoutStart
  | logoutSuccess
  | logoutFailure
  | logoutMonitoringStart
  | logoutMonitoringSuccess
  | logoutMonitoringFailure;