import * as ActionTypes from "../constants/actionTypes";

export interface CardState {
  isLoading: boolean;
  cardBody: CardBody[];
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

export type CardActions =
 | AddCardBodyStart
 | AddCardBodySuccess
 | AddCardBodyFailure;
