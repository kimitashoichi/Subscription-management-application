import * as Models from "../models/CardModels";
import * as ActionTypes from "../constants/actionTypes";

export const AddCardAction = {
  start: (payload: Models.AddCardBody) => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE
  })
}

export const GetAllCardAction = {
  start: (id: string) => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START,
    payload: id
  }),

  success: (payload: Models.CardBody[]) => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS,
    payload: payload
  }),

  failure: () => ({
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE
  })
}

export const DeleteCardAction = {
  start: (id: string) => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START,
    payload: id
  }),

  success: () => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS,
  }),

  failure: () => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE
  })
}


export const EditCardAction = {
  start: (payload: Models.CardBody) => ({
    type: ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.EDIT_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.EDIT_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_FAILURE
  })
}


export const AmountCalculationAction = {
  start: (payload: Models.CardPriceAmount) => ({
    type: ActionTypes.AMOUNT_CALCULATION_START as typeof ActionTypes.AMOUNT_CALCULATION_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.AMOUNT_CALCULATION_SUCCESS as typeof ActionTypes.AMOUNT_CALCULATION_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.AMOUNT_CALCULATION_FAILURE as typeof ActionTypes.AMOUNT_CALCULATION_FAILURE
  })
}

export const GetAmountAction = {
  start: (id: string) => ({
    type: ActionTypes.GET_AMOUNT_START as typeof ActionTypes.GET_AMOUNT_START,
    payload: id
  }),

  success: (payload: Models.CardPriceAmount) => ({
    type: ActionTypes.GET_AMOUNT_SUCCESS as typeof ActionTypes.GET_AMOUNT_SUCCESS,
    payload: payload
  }),

  failure: () => ({
    type: ActionTypes.GET_AMOUNT_FAILURE as typeof ActionTypes.GET_AMOUNT_FAILURE
  })
}