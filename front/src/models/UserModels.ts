import * as ActionTypes from "../constants/actionTypes";

// userId, name, email, => name は初期値をid or ゲストに設定する（望ましいのはid）

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

export type userAction =
  | loginStart
  | loginSuccess
  | loginFailure
  | logoutStart
  | logoutSuccess
  | logoutFailure;