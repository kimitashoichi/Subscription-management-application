import * as ActionTypes from "../constants/actionTypes";
import * as Models from "../models/UserModels";

export const loginAction = {
  start: () => ({
    type: ActionTypes.LOGIN_START as typeof ActionTypes.LOGIN_START
  }),

  success: (user: Models.LoginUser) => ({
    type: ActionTypes.LOGIN_SUCCESS as typeof ActionTypes.LOGIN_SUCCESS,
    payload: user
  }),

  failure: () => ({
    type: ActionTypes.LOGIN_FAILURE as typeof ActionTypes.LOGIN_FAILURE
  }),
}


export const logoutAction = {
  start: () => ({
    type: ActionTypes.LOGOUT_START as typeof ActionTypes.LOGOUT_START
  }),

  success: () => ({
    type: ActionTypes.LOGOUT_SUCCESS as typeof ActionTypes.LOGOUT_SUCCESS
  }),
  
  failure: () => ({
    type: ActionTypes.LOGOUT_FAILURE as typeof ActionTypes.LOGOUT_FAILURE
  }),
}