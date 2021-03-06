import * as ActionTypes from "../constants/actionTypes";

export interface CardState {
  addLoading: boolean;
  editLoading: boolean;
  deleteLoading: boolean;
  getLoading: boolean;
  amountLoading: boolean;
  addCardBody: CardBody;
  getAllCardBody: CardBody[];
  amount: CardPriceAmount;
}


export interface CardBody {
  id: string;
  userId: string;
  name: string;
  price: number;
  caption: string;
}

export interface AddCardBody {
  userId: string;
  name: string;
  price: number;
  caption: string;
}

// 合計金額
export interface CardPriceAmount {
  userId: string;
  amount: number;
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


// Calculation Amount Card Price
export interface AmountCalculationStart {
  type: typeof ActionTypes.AMOUNT_CALCULATION_START;
  payload: CardPriceAmount;
}

export interface AmountCalculationSuccess {
  type: typeof ActionTypes.AMOUNT_CALCULATION_SUCCESS;
}

export interface AmountCalculationFailure {
  type: typeof ActionTypes.AMOUNT_CALCULATION_FAILURE;
}


// Get Amount Card Price
export interface GetAmountStart {
  type: typeof ActionTypes.GET_AMOUNT_START;
  payload: string;
}

export interface GetAmountSuccess {
  type: typeof ActionTypes.GET_AMOUNT_SUCCESS;
  payload: CardPriceAmount;
}

export interface GetAmountFailure {
  type: typeof ActionTypes.GET_AMOUNT_FAILURE;
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
 | EditCardBodyFailure
 | AmountCalculationStart
 | AmountCalculationSuccess
 | AmountCalculationFailure
 | GetAmountStart
 | GetAmountSuccess
 | GetAmountFailure;
