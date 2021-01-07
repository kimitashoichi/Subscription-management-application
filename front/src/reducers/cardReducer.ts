import { Reducer } from "redux";

import * as ActionTypes from "../constants/actionTypes";
import * as Models from "../models/CardModels";

const initialState: Models.CardState = {
  isLoading: false,
  addCardBody: {
    name: "",
    price: 0,
    caption: ""
  },
  getAllCardBody: []
}

const card: Reducer<Models.CardState, Models.CardActions> = (
  state: Models.CardState = initialState,
  action: Models.CardActions
): Models.CardState => {
  switch (action.type) {
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        getAllCardBody: action.payload,
        isLoading: false
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default: {
      return state
    }
  }
}

export default card;