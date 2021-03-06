import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/CardModels';
import * as APIs from '../apis/cardApis';
import {
  AddCardAction,
  GetAllCardAction,
  DeleteCardAction,
  EditCardAction,
  GetAmountAction
} from "../actions/cardActions"


export function* runAddCardBodySaga (actions: Models.AddCardBodyStart) {
  const data = actions.payload;
  const handler = APIs.AddCardBody;
  const {success, error} = yield call(handler, data)
  if (success && !error) {
    console.log("ADD CARD BODY SAGA OK");
    yield put(AddCardAction.success());
  } else {
    console.log("ADD CARD BODY SAGA NG");
    yield put(AddCardAction.failure()); 
  }
};

export function* runGetAllCardBodySaga (actions: Models.DeleteCardBodyStart) {
  const id = actions.payload;
  const handler = APIs.GetAllCardBody;
  const {cards, error} = yield call(handler, id);
  if (cards && !error) {
    console.log("GET ALL CARD BODY SAGA OK", cards);
    yield put(GetAllCardAction.success(cards));
  } else {
    console.log("GET ALL CARD BODY SAGA NG");
    yield put(GetAllCardAction.failure()); 
  }
};

export function* runDeleteCardBodySaga (action: Models.DeleteCardBodyStart) {
  const id = action.payload;
  const handler = APIs.DeleteCardBody;
  const {success, error} = yield call(handler, id);
  if (success && !error) {
    console.log("DELETE CARD BODY SAGA OK");
    yield put(DeleteCardAction.success());
  } else {
    console.log("DELETE CARD BODY SAGA NG");
    yield put(DeleteCardAction.failure()); 
  }
};

export function* runEditCardBodySaga (action: Models.EditCardBodyStart) {
  const data = action.payload;
  const handler = APIs.EditCardBody;
  const {success, error} = yield call(handler, data)
  if (success && !error) {
    console.log("EDIT CARD BODY SAGA OK");
    yield put(EditCardAction.success());
  } else {
    console.log("EDIT CARD BODY SAGA NG");
    yield put(EditCardAction.failure()); 
  }
};

export function* runGetAmountSaga (action: Models.GetAmountStart) {
  const data = action.payload;
  const handler = APIs.GetAmount;
  const {amount, error} = yield call(handler, data);
  if (amount && !error) {
    console.log('OK GET AMOUNT SAGA');
    yield put(GetAmountAction.success(amount));
  } else {
    console.log("NG GET AMOUNT SAGA");
    yield put(GetAmountAction.failure());
  }
}

export function* watchCards () {
  yield takeEvery(ActionTypes.ADD_SUBSCRIPTIOM_CARD_START, runAddCardBodySaga);
  yield takeEvery(ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START, runGetAllCardBodySaga);
  yield takeEvery(ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START, runDeleteCardBodySaga);
  yield takeEvery(ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START, runEditCardBodySaga);
  yield takeEvery(ActionTypes.GET_AMOUNT_START, runGetAmountSaga);
}

export default function* rootSaga () {
  yield all([fork(watchCards)])
};