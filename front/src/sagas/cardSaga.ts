import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/CardModels';
import * as APIs from '../apis/cardApis';
import {
  AddCardAction, GetAllCardAction,
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

export function* runGetAllCardBodySaga () {
  const handler = APIs.GetAllCardBody;
  const {cards, error} = yield call(handler)
  if (cards && !error) {
    console.log("GET ALL CARD BODY SAGA OK", cards);
    yield put(GetAllCardAction.success(cards));
  } else {
    console.log("GET ALL CARD BODY SAGA NG");
    yield put(GetAllCardAction.failure()); 
  }
};

export function* watchCards () {
  yield takeEvery(ActionTypes.ADD_SUBSCRIPTIOM_CARD_START, runAddCardBodySaga);
  yield takeEvery(ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START, runGetAllCardBodySaga);
}

export default function* rootSaga () {
  yield all([fork(watchCards)])
};