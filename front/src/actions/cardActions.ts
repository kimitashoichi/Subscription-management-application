import * as Models from "../models/CardModels";
import * as ActionTypes from "../constants/actionTypes";

export const AddCardAction = {
  start: (payload: Models.CardBody) => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CAR_FAILURE as typeof ActionTypes.ADD_SUBSCRIPTIOM_CAR_FAILURE
  })
}

export const GetAllCardAction = {
  start: () => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START,
  }),

  success: (payload: Models.CardBody[]) => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS,
    payload: payload
  }),

  failure: () => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CAR_FAILURE as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CAR_FAILURE
  })
}