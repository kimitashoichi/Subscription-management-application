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
    type: ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE
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
    type: ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE
  })
}

export const DeleteCardAction = {
  // TODO:カードのIDを指定して特定のデータを削除できるようにする
  start: () => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START,
  }),

  success: () => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS,
  }),

  failure: () => ({
    type: ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE as typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE
  })
}


export const EditCardAction = {
  // TODO:カードのIDを指定して特定のデータを編集できるようにする
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