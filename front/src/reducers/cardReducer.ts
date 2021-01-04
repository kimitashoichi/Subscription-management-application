import { Reducer } from "redux";

import * as ActionTypes from "../constants/actionTypes";
import * as Models from "../models/CardModels";

const initialState: Models.CardState = {
  isLoading: false,
  cardBody: [],
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
    case ActionTypes.ADD_SUBSCRIPTIOM_CAR_FAILURE:
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