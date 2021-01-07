import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/CardModels';
import * as APIs from '../apis/cardApis';
import {
  AddCardAction,
  GetAllCardAction,
  DeleteCardAction,
  EditCardAction
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


// TODO:ID指定でカードを削除できるようにする
export function* runDeleteCardBodySaga () {
  const handler = APIs.DeleteCardBody;
  const {success, error} = yield call(handler)
  if (success && !error) {
    console.log("DELETE CARD BODY SAGA OK");
    yield put(DeleteCardAction.success());
  } else {
    console.log("DELETE CARD BODY SAGA NG");
    yield put(DeleteCardAction.failure()); 
  }
};


// TODO:ID指定でカードを編集できるようにする
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

export function* watchCards () {
  yield takeEvery(ActionTypes.ADD_SUBSCRIPTIOM_CARD_START, runAddCardBodySaga);
  yield takeEvery(ActionTypes.GET_ALL_SUBSCRIPTIOM_CARD_START, runGetAllCardBodySaga);
  yield takeEvery(ActionTypes.DELETE_SUBSCRIPTIOM_CARD_START, runDeleteCardBodySaga);
  yield takeEvery(ActionTypes.EDIT_SUBSCRIPTIOM_CARD_START, runEditCardBodySaga);
}

export default function* rootSaga () {
  yield all([fork(watchCards)])
};