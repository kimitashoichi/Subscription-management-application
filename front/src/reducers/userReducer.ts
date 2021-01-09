import { Reducer } from "redux";

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/UserModels';

const InitialState: Models.UserState = {
  isLoading: false,
  user :{
    id: "",
    name: "",
    email: ""
  }
};

const user: Reducer<Models.UserState, Models.userAction> = (
  state: Models.UserState = InitialState,
  action: Models.userAction
): Models.UserState => {
  switch (action.type) {
    case ActionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.LOGOUT_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: InitialState.user,
        isLoading: false
      }
    case ActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
};

export default user;