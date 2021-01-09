import { fork } from "redux-saga/effects";

// それぞれのサガファイルをインポートする
import cardSaga from "./cardSaga";
import userSaga from "./userSaga";

export default function* rootSaga () {
  yield fork(cardSaga);
  yield fork(userSaga);
}