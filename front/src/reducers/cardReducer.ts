import { Reducer } from "redux";

import * as ActionTypes from "../constants/actionTypes";
import * as Models from "../models/CardModels";

const initialState: Models.CardState = {
  addLoading: false,
  editLoading: false,
  deleteLoading: false,
  getLoading: false,
  amountLoading: false,
  addCardBody: {
    id: "",
    userId: "",
    name: "",
    price: 0,
    caption: ""
  },
  getAllCardBody: [],
  amount: {
    userId: "",
    amount: 0
  }
}

const card: Reducer<Models.CardState, Models.CardActions> = (
  state: Models.CardState = initialState,
  action: Models.CardActions
): Models.CardState => {
  switch (action.type) {
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        addLoading: true
      }
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        addLoading: false
      }
    case ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        addLoading: false
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        getLoading: true
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        getAllCardBody: action.payload,
        getLoading: false
      }
    case ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        getLoading: false
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        deleteLoading: true
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        deleteLoading: false
      }
    case ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        deleteLoading: false
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START:
      return {
        ...state,
        editLoading: true
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_SUCCESS:
      return {
        ...state,
        editLoading: false
      }
    case ActionTypes.EDIT_SUBSCRIPTIOM_CARD_FAILURE:
      return {
        ...state,
        editLoading: false
      }
    case ActionTypes.GET_AMOUNT_START:
      return {
        ...state,
        amountLoading: true
      }
    case ActionTypes.GET_AMOUNT_SUCCESS:
      return {
        ...state,
        amount: action.payload,
        amountLoading: false
      }
    case ActionTypes.GET_AMOUNT_FAILURE:
      return {
        ...state,
        amountLoading: false
      }
    default: {
      return state
    }
  }
}

export default card;