import { fork } from "redux-saga/effects";

// それぞれのサガファイルをインポートする
import cardSaga from "./cardSaga";

export default function* rootSaga () {
  yield fork(cardSaga);
}