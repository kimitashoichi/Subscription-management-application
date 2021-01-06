import * as ActionTypes from "../constants/actionTypes";

export interface CardState {
  isLoading: boolean;
  addCardBody: CardBody;
  getAllCardBody: CardBody[];
}


// TODO:ログイン機能をつけるときにユーザーIDプロパティを追加する
export interface CardBody {
  name: string;
  price: number;
  caption: string;
}

// Add Card Body
export interface AddCardBodyStart {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_START,
  payload: CardBody
}

export interface AddCardBodySuccess {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CARD_SUCCESS,
}

export interface AddCardBodyFailure {
  type: typeof ActionTypes.ADD_SUBSCRIPTIOM_CAR_FAILURE,
}


// Get All Card Body
// 本来であれば引数にユーザーIDを渡す
export interface GetAllCardBodyStart {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START,
}

export interface GetAllCardBodySuccess {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_SUCCESS,
  payload: CardBody[]
}

export interface GetAllCardBodyFailure {
  type: typeof ActionTypes.GET_ALL_SUBSCRIPTIOM_CAR_FAILURE,
}

export type CardActions =
 | AddCardBodyStart
 | AddCardBodySuccess
 | AddCardBodyFailure
 | GetAllCardBodyStart
 | GetAllCardBodySuccess
 | GetAllCardBodyFailure;
