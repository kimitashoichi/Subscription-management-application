import * as ActionTypes from "../constants/actionTypes";

export interface CardState {
  isLoading: boolean;
  addCardBody: CardBody;
  getAllCardBody: CardBody[];
}


// TODO:ログイン機能をつけるときにユーザーIDプロパティ/カードIDプロパティを追加する
export interface CardBody {
  id: string;
  userId: string;
  name: string;
  price: number;
  caption: string;
}


// 一時的なテストモデル=>全体を編集するのがめんどくさいのでこちらを一時的に利用する
export interface AddCardBody {
  userId: string;
  name: string;
  price: number;
  caption: string;
}

// Add Card Body
export interface AddCardBodyStart {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_START,
  payload: AddCardBody
}

export interface AddCardBodySuccess {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS,
}

export interface AddCardBodyFailure {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_FAILURE,
}


// Get All Card Body
export interface GetAllCardBodyStart {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START;
  payload: string;
}

export interface GetAllCardBodySuccess {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS;
  payload: CardBody[];
}

export interface GetAllCardBodyFailure {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_FAILURE;
}


// DELETE Card Body
// TODO:ID指定で特定のデータを削除できるようにする
export interface DeleteCardBodyStart {
  type: typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START;
  payload: string;
}

export interface DeleteCardBodySuccess {
  type: typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_SUCCESS;
}

export interface DeleteCardBodyFailure {
  type: typeof ActionTypes.DELETE_SUBSCRIPTIOM_CARD_FAILURE;
}

// EDIT Card Body
export interface EditCardBodyStart {
  type: typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START;
  payload: CardBody;
}

export interface EditCardBodySuccess {
  type: typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_SUCCESS;
}

export interface EditCardBodyFailure {
  type: typeof ActionTypes.EDIT_SUBSCRIPTIOM_CARD_FAILURE;
}

export type CardActions =
 | AddCardBodyStart
 | AddCardBodySuccess
 | AddCardBodyFailure
 | GetAllCardBodyStart
 | GetAllCardBodySuccess
 | GetAllCardBodyFailure
 | DeleteCardBodyStart
 | DeleteCardBodySuccess
 | DeleteCardBodyFailure
 | EditCardBodyStart
 | EditCardBodySuccess
 | EditCardBodyFailure;
